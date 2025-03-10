import { Schema, model } from "mongoose";

const intershipSchema = new Schema(
  {
    studentName: {
      type: String,
      required: ["true", "Name must be required"],
      trim: true,
    },
    enrollmentNumber: {
      type: String,
      trim: true,
    },
    branch:{
      type: String,
      trim: true,
    },
    companyName:{
      type: String,
      trim: true,
    },
    duration:{
      type: String,
      trim: true,
    },
    stipend:{
      type: String,
      trim: true,
    },
    projectTitle:{
      type: String,
      trim: true,
    },
    status:{
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);


const Intership = model("Intership", intershipSchema);

export default Intership;
