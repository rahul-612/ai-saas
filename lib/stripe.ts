import Stripe from "stripe"

export const dynamic = "force-dynamic";

export const stripe = new Stripe(process.env.STRIPE_API_KEY!, {
  apiVersion: "2022-11-15",
  typescript: true,
});
