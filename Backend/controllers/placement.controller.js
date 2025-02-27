import xlsx from "xlsx";
import Placement from "../models/placement.model.js"; // Ensure correct path
import ApiError from "../utils/error.utils.js"; // Ensure correct path
import fs from "fs";

const uploadPlacementData = async (req, res, next) => {
  try {
    const REQUIRED_COLUMNS = ["studentName", "companyName", "enrollmentNumber", "branch"];

    if (!req.file) {
      return next(new ApiError(400, "No file uploaded"));
    }

    // Read the uploaded Excel file
    const workbook = xlsx.readFile(req.file.path);
    const sheetName = workbook.SheetNames[0];

    if (!sheetName) {
      fs.unlinkSync(req.file.path);
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
      if (!entry.studentName || !entry.enrollmentNumber || !entry.branch) {
        return next(new ApiError(400, "Missing required fields: studentName, enrollmentNumber, or branch"));
      }

      return {
        studentName: entry.studentName.toLowerCase().trim(),
        companyName: entry.companyName?.toLowerCase().trim() || "",
        enrollmentNumber: entry.enrollmentNumber.toLowerCase().trim(),
        branch: entry.branch.toLowerCase().trim(),
      };
    });

    await Placement.insertMany(validatedData);
    fs.unlinkSync(req.file.path);

    res.status(200).json({ success: true, message: "Placement data uploaded successfully", data: validatedData });
  } catch (error) {
    if (req.file?.path) fs.unlinkSync(req.file.path);
    return next(new ApiError(500, error.message));
  }
};

const getPlacementData = async (req, res, next) => {
  try {
    const data = await Placement.find();

    if (data.length === 0) {
      return next(new ApiError(404, "No placement data found"));
    }

    res.status(200).json({ success: true, message: "Placement data fetched successfully", data });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

export { uploadPlacementData, getPlacementData };
