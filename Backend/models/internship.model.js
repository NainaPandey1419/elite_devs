import { Schema, model } from "mongoose";

const intershipSchema = new Schema(
  {
    studentName: {
      type: String,
      required: ["true", "Name must be required"],
      lowercase: true,
      trim: true,
    },
    companyName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    startingDate:{
      type: String,
      lowercase: true,
      trim: true,
    },
    duration:{
      type: String,
      lowercase: true,
      trim: true,
    },
    enrollmentNumber:{
      type: String,
      lowercase: true,
      trim: true,
    },
    branch:{
      type: String,
      lowercase: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);


const Intership = model("Intership", intershipSchema);

export default Intership;
