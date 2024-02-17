import { Schema, model, models } from "mongoose";
const stripe = require('stripe')(process.env.STRIPE_SK);

const OrderSchema = new Schema({
    line_items:Object,
    name:String,
    email:String,
    city:String,
    postalCode:String,
    streetAddress:String,
    country:String,
    paid:Boolean,
}, {
    timestamps: true,
});

export const Order = models?.Order || model('Order', OrderSchema);