import mongoose, { Document, Model } from "mongoose";

export interface Order {
    _id?: string;
    nameClient: string;
    value: number;
    date: Date;
}

interface OrderModel extends Omit<Order, "_id">, Document {}

const schema = new mongoose.Schema({
    nameClient: { type: String },
    value: { type: Number, required: true },
    date: { type: Date, required: true },
});

export const Order: Model<OrderModel> = mongoose.model("Order", schema);
