import { mongooseConnect } from "@/lib/mongoose";
import { Order } from "@/models/Order";
const stripe = require('stripe')(process.env.STRIPE_SK);
import {buffer} from 'micro';

const endpointSecret = "whsec_256d3aa8ef8a7bd3b79d12ad76ad88b41a1b617509c95c41c3ef431f799593d9";

export default async function handle(req,res) {
    await mongooseConnect();
    const sig = req.headers['stripe-signature'];

    let event;

    try {
        event = stripe.webhooks.constructEvent(await buffer(req), sig, endpointSecret);
    } catch (err) {
        res.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Handle the event
    switch (event.type) {
        case 'checkout.session.completed':
        const data = event.data.object;
        const orderId = data.metadata.orderId;
        const paid = data.payment_status === 'paid';
        // Then define and call a function to handle the event payment_intent.succeeded
        if (orderId && paid) {
            await Order.findByIdAndUpdate(orderId, {
                paid:true,
            })
        }
        break;
        // ... handle other event types
        default:
        console.log(`Unhandled event type ${event.type}`);
    }
    res.status(200).send('ok');
}

export const config = {
    api: {bodyParser:false,}
}


// hero-secure-glad-ideal
// acct_1NfvF0Cr5uPWFsEW