import { Document, Schema, model, models } from "mongoose";
import { IUser } from "./user.model";

export interface IEvent extends Document {
  _id: string;
  title: string;
  description?: string;
  location?: string;
  createdAt: Date;
  imageUrl: string;
  startDateTime: Date;
  endDateTime: Date;
  price?: string;
  isFree: boolean;
  url?: string;
  category?: {_id: string, name: string};
  organizer?: IUser;
}

const EventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please provide event title"],
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  imgaeUrl: {
    type: String,
    required: [true, "Please provide an image for the event"],
  },
  startDateTime: {
    type: String,
    default: Date.now()
  },
  endDateTime: {
    type: String,
    default: Date.now()
  },
  price: {
    type: String
  },
  isFree: {
    type: Boolean,
    default: false
  },
  url: {
    type: String
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

export const Event = models.Event || model("Event", EventSchema);