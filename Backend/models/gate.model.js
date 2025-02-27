import { Schema, model } from "mongoose";

const gateSchema = new Schema(
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
    gateRegistration: {
      type: String,
      trim: true,
    },
    rank: {
      type: String,
      trim: true,
    },
    score: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Gate = model("Gate", gateSchema);

export default Gate;
