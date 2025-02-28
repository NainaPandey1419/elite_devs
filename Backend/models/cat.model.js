import { Schema, model } from "mongoose";

const catSchema = new Schema(
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
    category: {
      type: String,
      trim: true,
    },
    catRegistration: {
      type: String,
      trim: true,
    },
    percentile: {
      type: String,
      trim: true,
    },
    score: {
      type: String,
      trim: true,
    },
    rank: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Cat= model("Cat", catSchema);

export default Cat;
