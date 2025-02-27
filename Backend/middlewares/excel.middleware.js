import path from "path";
import multer from "multer";

const uploadExcelSheet = multer({
  dest: "uploads/", 
  limits: { fileSize: 50 * 1024 * 1024 }, // 50 MB max limit
  storage: multer.diskStorage({
    destination: "uploads/",
    filename: (_req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (_req, file, cb) => {
    let ext = path.extname(file.originalname).toLowerCase();
    if (
      ext !== ".xls" &&
      ext !== ".xlsx"
    ) {
      cb(new Error(`Unsupported file type! ${ext}`), false);
      return;
    }

    cb(null, true);
  },
});

export default uploadExcelSheet;
