import Stripe from "stripe";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { bundleId, bundleName, email, name, vehicle } = req.body;
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecret) {
      return res.status(400).json({ 
        error: "Stripe secret key is not configured. Please verify that STRIPE_SECRET_KEY is stored in your secrets panel." 
      });
    }

    const stripe = new Stripe(stripeSecret);

    const priceAmount = 4900; // $49.00 CAD (deposit)
    const host = req.headers["host"] || "localhost:3000";
    const protocol = req.headers["x-forwarded-proto"] || "https";
    const appUrl = process.env.APP_URL || `${protocol}://${host}`;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "cad",
            product_data: {
              name: `Astrateq Reservation: ${bundleName}`,
              description: `Refundable Pre-launch Deposit Spot for ${vehicle || "your vehicle"}`,
            },
            unit_amount: priceAmount,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      customer_email: email || undefined,
      success_url: `${appUrl}?checkout_status=success&bundle=${encodeURIComponent(bundleName)}&email=${encodeURIComponent(email)}&name=${encodeURIComponent(name)}`,
      cancel_url: `${appUrl}?checkout_status=cancelled`,
      metadata: {
        bundleId,
        bundleName,
        customerName: name,
        customerEmail: email,
        vehicleInfo: vehicle
      }
    });

    return res.status(200).json({ url: session.url });
  } catch (error) {
    console.error("Stripe session creation error:", error);
    return res.status(500).json({ error: error.message });
  }
}
