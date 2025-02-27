import { Schema, model } from "mongoose";

const placementSchema = new Schema(
  {
    studentName: {
      type: String,
      required: ["true", "Name must be required"],
      trim: true,
    },
    companyName: {
      type: String,
      trim: true,
    },
    enrollmentNumber:{
      type: String,
      required: ["true", "Name must be required"],
      trim: true,
    },
    branch:{
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);


const Placement = model("Placement", placementSchema);

export default Placement;
