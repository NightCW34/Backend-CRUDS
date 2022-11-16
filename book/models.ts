import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
  id: String,
  title: String,
  relaseDate: String,
  author: String,
  category: String,
  description: String,
  numberPage: Number,
});

export const Book = mongoose.model("Book", bookSchema);
