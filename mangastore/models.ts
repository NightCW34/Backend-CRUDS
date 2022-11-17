import mongoose from "mongoose";

const mangastoreSchema = new mongoose.Schema({
    title: String,
    autor: String,
    price: Number,
    publicationDate: String,
    category: String,
});

export const mangastore = mongoose.model('mangastore', mangastoreSchema);