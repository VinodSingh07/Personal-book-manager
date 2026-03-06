import mongoose from "mongoose";

//Book Schema model

const bookSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    title: String,

    author: String,

    tags: [String],

    status: {
      type: String,
      enum: ["want", "reading", "completed"],
      default: "want",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Book", bookSchema);
