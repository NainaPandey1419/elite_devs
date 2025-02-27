import { Schema, model } from "mongoose";

const gateSchema = new Schema(
  {
    studentName: {
      type: String,
      required: [true, "Name must be required"],
      lowercase: true,
      trim: true,
    },
    rank: {
      type: String,
      lowercase: true,
      trim: true,
    },
    marks: {
      type: String,
      lowercase: true,
      trim: true,
    },
    year: {
      type: String,
      lowercase: true,
      trim: true,
    },
    branch: {
      type: String,
      lowercase: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gate = model("Gate", gateSchema);

export default Gate;
