import express from "express";
import path from "path";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Route - Stripe Config Info
app.get("/api/stripe-config", (req, res) => {
  const isConfigured = !!process.env.STRIPE_SECRET_KEY;
  const publishableKey = process.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
  res.json({
    configured: isConfigured,
    publishableKey: publishableKey
  });
});

// API Route - Create Checkout Session
app.post("/api/create-checkout-session", async (req, res) => {
  try {
    const { bundleId, bundleName, email, name, vehicle } = req.body;
    const stripeSecret = process.env.STRIPE_SECRET_KEY;
    
    if (!stripeSecret) {
      return res.status(400).json({ 
        error: "Stripe secret key is not configured. Please verify that STRIPE_SECRET_KEY is stored in your secrets panel." 
      });
    }

    // Lazy load Stripe to prevent startup crashes if key is initially absent
    const { default: Stripe } = await import("stripe");
    const stripe = new Stripe(stripeSecret);

    const priceAmount = 4900; // $49.00 CAD (deposit)
    const host = req.get('host') || `localhost:${PORT}`;
    const protocol = req.secure || req.headers['x-forwarded-proto'] === 'https' ? 'https' : 'http';
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

    res.json({ url: session.url });
  } catch (error: any) {
    console.error("Stripe error:", error);
    res.status(500).json({ error: error.message });
  }
});

// Serve frontend in different modes
if (!process.env.VERCEL) {
  if (process.env.NODE_ENV !== "production") {
    // Development mode with Vite dev server middleware
    import("vite").then(async ({ createServer: createViteServer }) => {
      const vite = await createViteServer({
        server: { middlewareMode: true },
        appType: "spa",
      });
      app.use(vite.middlewares);
    });
  } else {
    // Production standalone container serving compiled files
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  // Standalone express server setup
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// Export the app for Vercel Serverless Function
export { app };
export default app;
