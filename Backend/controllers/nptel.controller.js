import fs from "fs";
import xlsx from "xlsx";
import csvParser from "csv-parser";
import Nptel from "../models/nptel.model.js";
import ApiError from "../utills/error.utills.js";

const uploadNptelData = async (req, res, next) => {
  try {
    const REQUIRED_COLUMNS = [
      "studentName",
      "enrollmentNumber",
      "branch",
      "courseName",
      "score",
      "certificateType",
      "duration"
    ];

    if (!req.file) {
      return next(new ApiError(400, "No file uploaded"));
    }

    const fileExtension = req.file.originalname.split(".").pop().toLowerCase();
    let jsonData = [];

    if (fileExtension === "xls" || fileExtension === "xlsx") {
      const workbook = xlsx.readFile(req.file.path);
      const sheetName = workbook.SheetNames[0];

      if (!sheetName) {
        fs.unlinkSync(req.file.path);
        return next(new ApiError(400, "No sheets found in the Excel file"));
      }

      const sheet = workbook.Sheets[sheetName];
      jsonData = xlsx.utils.sheet_to_json(sheet);
    } else if (fileExtension === "csv") {
      const csvData = [];
      await new Promise((resolve, reject) => {
        fs.createReadStream(req.file.path)
          .pipe(csvParser())
          .on("data", (row) => csvData.push(row))
          .on("end", () => resolve())
          .on("error", (error) => reject(error));
      });

      jsonData = csvData;
    } else {
      fs.unlinkSync(req.file.path);
      return next(new ApiError(400, "Invalid file format. Please upload .xls, .xlsx, or .csv"));
    }

    fs.unlinkSync(req.file.path);

    if (jsonData.length === 0) {
      return next(new ApiError(404, "No data found in the file"));
    }

    const headers = Object.keys(jsonData[0]);
    const isValidFormat = REQUIRED_COLUMNS.every(col => headers.includes(col));

    if (!isValidFormat) {
      return next(new ApiError(401, "Invalid file format. Ensure required columns exist"));
    }

    const validatedData = jsonData.map((entry) => {
      if (!entry.studentName || !entry.courseName || !entry.score || !entry.branch) {
        throw new ApiError(400, "Missing required fields: studentName, courseName, score, or branch");
      }

      return {
        studentName: entry.studentName.trim(),
        enrollmentNumber: entry.enrollmentNumber?.trim() || "",
        branch: entry.branch.trim(),
        courseName: entry.courseName.trim(),
        score: entry.score.toString().trim(),
        certificateType: entry.certificateType?.trim() || "",
        duration: entry.duration?.trim() || "",
      };
    });

    await Nptel.insertMany(validatedData);

    res.status(200).json({ success: true, message: "Data uploaded successfully", data: validatedData });
  } catch (error) {
    if (req.file?.path) fs.unlinkSync(req.file.path);
    return next(new ApiError(500, error.message));
  }
};

const getNptelData = async (req, res, next) => {
  try {
    const data = await Nptel.find();

    if (data.length === 0) {
      return next(new ApiError(404, "No data found"));
    }

    res.status(200).json({ success: true, message: "Data fetched successfully", data });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const deleteAllNptelData = async (req, res, next) => {
  try {
    const result = await Nptel.deleteMany({});

    if (result.deletedCount === 0) {
      return next(new ApiError(404, "No NPTEL data found to delete"));
    }

    res.status(200).json({ success: true, message: "All NPTEL data deleted successfully" });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

export { uploadNptelData, getNptelData, deleteAllNptelData };
