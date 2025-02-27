import { Schema, model } from "mongoose";

const placementSchema = new Schema(
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


const Placement = model("Placement", placementSchema);

export default Placement;
