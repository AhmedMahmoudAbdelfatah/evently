import { Schema, model, models } from "mongoose";

const CategorySchema = new Schema({
  name: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide name"],
    unique: [true, "This name is already exist"]
  }
});


export const Category = models.Category || model("Category", CategorySchema);