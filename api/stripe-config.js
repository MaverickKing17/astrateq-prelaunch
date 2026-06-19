export default async function handler(req, res) {
  try {
    const stripeSecret = process.env.STRIPE_SECRET_KEY || "";
    const isConfigured = !!stripeSecret;
    const publishableKey = process.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
    
    // Automatically determine if operating in Validation Mode (test environment or no key)
    let isValidationMode = true;
    if (stripeSecret.startsWith("sk_live_")) {
      isValidationMode = false;
    }
    
    return res.status(200).json({
      configured: isConfigured,
      publishableKey: publishableKey,
      isValidationMode: isValidationMode
    });
  } catch (error) {
    console.error("Error in /api/stripe-config:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
