import { Document, Schema, model, models } from "mongoose";


export interface IUser extends Document {
  _id: string;
  clerkId: string;
  email: string;
  name: string;
  firstName: string;
  lastName: string;
  image: string;
}

const UserSchema = new Schema({
  clerkId: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide clerk id"],
    unique: [true, "This id is already exist"]
  },
  email: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide an email"],
    unique: [true, "This email is already exist"]
  },
  name: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide a user name"],
    unique: [true, "This name is already exist"]
  },
  firstName: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide user first name"],
  },
  lastName: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide user last name"],
  },
  image: {
    type: [String, "This value must be a string"],
    required: [true, "Please provide user image"],
  }
});

export const User = models.User || model("User", UserSchema);