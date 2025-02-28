import path from "path";
import multer from "multer";
import fs from "fs";

// Ensure the "uploads" folder exists
const uploadDir = "uploads/";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Unique filename
  },
});

// File filter for Excel and CSV files
const fileFilter = (_req, file, cb) => {
  console.log("file in multer",file)
  const allowedExtensions = [".xls", ".xlsx", ".csv"];
  const ext = path.extname(file.originalname).toLowerCase();
  if (!allowedExtensions.includes(ext)) {
    return cb(new Error("Invalid file type ",ext), false);
  }

  cb(null, true); // Accept file
};

// Initialize Multer
const uploadExcelSheet = multer({
  storage,
  limits: { fileSize: 50 * 1024 * 1024 }, // 50MB max file size
  fileFilter,
});

export default uploadExcelSheet;
