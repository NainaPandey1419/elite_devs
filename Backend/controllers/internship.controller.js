import fs from "fs";
import xlsx from "xlsx";
import csvParser from "csv-parser";
import Intership from "../models/internship.model.js";
import ApiError from "../utills/error.utills.js";

const uploadInternshipData = async (req, res, next) => {
  try {
    const REQUIRED_COLUMNS = [
      "studentName",
      "enrollmentNumber",
      "branch",
      "companyName",
      "duration",
      "stipend",
      "projectTitle",
      "status"
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
    const isValidFormat = REQUIRED_COLUMNS.every((col) => headers.includes(col));

    if (!isValidFormat) {
      return next(new ApiError(401, "Invalid file format. Ensure required columns exist"));
    }

    const validatedData = jsonData.map((entry) => {
      if (!entry.studentName || !entry.enrollmentNumber || !entry.branch) {
        throw new ApiError(400, "Missing required fields: studentName, enrollmentNumber, or branch");
      }
      return {
        studentName: entry.studentName.trim(),
        enrollmentNumber: entry.enrollmentNumber.trim(),
        branch: entry.branch.trim(),
        companyName: entry.companyName?.trim() || "",
        duration: entry.duration?.trim() || "",
        stipend: entry.stipend?.trim() || "",
        projectTitle: entry.projectTitle?.trim() || "",
        status: entry.status?.trim() || "",
      };
    });

    await Intership.insertMany(validatedData);

    res.status(200).json({ success: true, message: "Data uploaded successfully", data: validatedData });
  } catch (error) {
    if (req.file?.path) fs.unlinkSync(req.file.path);
    return next(new ApiError(500, error.message));
  }
};

const getInternshipData = async (req, res, next) => {
  try {
    const data = await Intership.find({}).limit(50);
     console.log(data)
    if (data.length === 0) {
      return next(new ApiError(404, "No data found"));
    }
    res.status(200).json({ success: true, message: "Data fetched successfully", data });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const deleteAllInternshipData = async (req, res, next) => {
  try {
    const result = await Intership.deleteMany({});
    if (result.deletedCount === 0) {
      return next(new ApiError(404, "No internship data found to delete"));
    }
    res.status(200).json({ success: true, message: "All internship data deleted successfully" });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};

const getFilterInternShip = async (req, res, next) => {
  try {
    const {branch } = req.body;
    console.log(branch)
    const data = await Intership.find({branch:{$in:branch}}).limit(50);

    if (data.length === 0) {
      return next(new ApiError(404, "No data found"));
    }
    res.status(200).json({ success: true, message: "Data fetched successfully", data });
  } catch (error) {
    return next(new ApiError(500, error.message));
  }
};


export { uploadInternshipData, getInternshipData, deleteAllInternshipData ,getFilterInternShip};