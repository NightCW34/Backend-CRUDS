import mongoose from "mongoose";

const librarySchema = new mongoose.Schema({
    id: String,
    name: String,
    description: String,
    price: String,
    dateExpiration: String,
    sales: String,
});

export const library = mongoose.model('library', librarySchema);