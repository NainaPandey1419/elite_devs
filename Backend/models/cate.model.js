import { Schema, model } from "mongoose";

const cateSchema = new Schema(
  {
    studentName: {
      type: String,
      required: ["true", "Name must be required"],
      lowercase: true,
      trim: true,
    },
    Rank: {
      type: String,
      lowercase: true,
      trim: true,
    },
    Marks:{
      type: String,
      lowercase: true,
      trim: true,
    },
    Year:{
      type: String,
      lowercase: true,
      trim: true,
    },
    Branch:{
      type: String,
      lowercase: true,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);


const Cate = model("Cate", cateSchema);

export default Cate;
