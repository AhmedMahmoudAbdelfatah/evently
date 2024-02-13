import { Schema, model, models } from "mongoose";


const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: [true, "Please provide stripe id"],
    unique: [true, "stripe id is already exist"]
  },
  totalAmount: {
    type: String,
  },
  event: {
    type: Schema.Types.ObjectId,
    ref: 'Event',
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});


export const Order = models.Order || model("Order", OrderSchema);