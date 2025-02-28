import { Schema, model } from "mongoose";

const nptelSchema = new Schema(
  {
    studentName: {
      type: String,
      required: [true, "Name must be required"],
      trim: true,
    },
    enrollmentNumber: {
      type: String,
      trim: true,
    },
    branch: {
      type: String,
      trim: true,
    },
    courseName: {
      type: String,
      trim: true,
    },
    score: {
      type: String,
      trim: true,
    },
    certificateType: {
      type: String,
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Nptel= model("Nptel", nptelSchema);

export default Nptel;
