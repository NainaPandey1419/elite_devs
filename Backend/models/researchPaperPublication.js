import { Schema, model } from "mongoose";

const researchPaperPublicationSchema = new Schema(
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
    paperTitle: {
      type: String,
      trim: true,
    },
    indexing: {
      type: String,
      trim: true,
    },
    impactFactor: {
      type: String,
      trim: true,
    },
    publicationLink: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const ResearchPaperPublication= model("ResearchPaperPublication", researchPaperPublicationSchema);

export default ResearchPaperPublication;
