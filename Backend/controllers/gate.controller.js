import xlsx from "xlsx";
import Gate from "../models/gate.model.js";
import ApiError from "../utills/error.utills.js";
import fs from "fs";

const uploadGateData = async (req, res, next) => {
  try {
    const REQUIRED_COLUMNS = ["studentName", "rank", "marks", "year", "branch"];

    if (!req.file) {
      return next(new ApiError(400, "No file uploaded"));
    }

    // Read the Excel file from disk (for Multer disk storage)
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];

    if (!sheetName) {
      fs.unlinkSync(req.file.path); // Delete file after processing
      return next(new ApiError(400, "No sheets found in the Excel file"));
    }

    const sheet = workbook.Sheets[sheetName];
    const jsonData = xlsx.utils.sheet_to_json(sheet);

    if (jsonData.length === 0) {
      fs.unlinkSync(req.file.path);
      return next(new ApiError(404, "No data found in the file"));
    }

    // Validate column headers
    const headers = Object.keys(jsonData[0]);
    const isValidFormat = REQUIRED_COLUMNS.every(col => headers.includes(col));

    if (!isValidFormat) {
      fs.unlinkSync(req.file.path);
      return next(new ApiError(401, "Invalid Excel format. Ensure required columns exist"));
    }

    // Validate and format data
    const validatedData = jsonData.map((entry) => {
      if (!entry.studentName || !entry.rank || !entry.marks || !entry.year || !entry.branch) {
        return next(new ApiError(400, "Missing required fields: studentName, rank, marks, year, or branch"));
      }

      return {
        studentName: entry.studentName.toLowerCase().trim(),
        rank: entry.rank.toLowerCase().trim(),
        marks: entry.marks.toLowerCase().trim(),
        year: entry.year.toLowerCase().trim(),
        branch: entry.branch.toLowerCase().trim(),
      };
    });

    console.log(validatedData);
    await Gate.insertMany(validatedData);

    fs.unlinkSync(req.file.path);

    res.status(200).json({ success: true, message: "Data uploaded successfully", data: validatedData });

  } catch (error) {
    if (req.file?.path) fs.unlinkSync(req.file.path); // Ensure file deletion on error
    return next(new ApiError(500, error.message));
  }
};

const getGateData = async (req, res, next) => {
  try {
    const data = await Gate.find();

    if (data.length === 0) {
      return next(new ApiError(404, "No data found"));
    }

    res.status(200).json({ success: true, message: "Data fetched successfully", data });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

export { uploadGateData, getGateData };
