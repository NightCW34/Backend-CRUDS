import mongoose from "mongoose";

const storeSchema = new mongoose.Schema({
  id: String,
  name: String,
  product: String,
  Categorie: String,
  direction: String,
});

export const Store = mongoose.model("Store", storeSchema);
