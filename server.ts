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
  const stripeSecret = process.env.STRIPE_SECRET_KEY || "";
  const isConfigured = !!stripeSecret;
  const publishableKey = process.env.VITE_STRIPE_PUBLISHABLE_KEY || "";
  
  // Automatically determine if operating in Validation Mode (test environment or no key)
  let isValidationMode = true;
  if (stripeSecret.startsWith("sk_live_")) {
    isValidationMode = false;
  }
  
  res.json({
    configured: isConfigured,
    publishableKey: publishableKey,
    isValidationMode: isValidationMode
  });
});

// API Route - Generate Lead Magnet customized diagnostic content via Gemini
app.post("/api/generate-lead-magnet", async (req, res) => {
  try {
    const { email, year, make, model } = req.body;
    if (!email || !year || !make || !model) {
      return res.status(400).json({ error: "Missing email, year, make, or model in request." });
    }

    const vehicle = `${year} ${make} ${model}`;
    const apiKey = process.env.GEMINI_API_KEY;

    // Fallback static high-quality data generator function
    const getFallbackData = () => {
      return {
        diagnosticReport: [
          {
            section: "Executive Diagnostic Summary",
            content: `Comprehensive passive monitoring analysis mapped specifically for the ${vehicle}. The Astrateq Gadgets supercapacitor hardware model establishes an active read-only connection with the vehicle's secondary powertrain CAN bus network. By deploying real-time sovereign edge processing, the DriveGuard system extracts vehicle diagnostic codes without writing active commands, mitigating any possibility of check-engine warnings or power control unit (PCU) malfunctions.`
          },
          {
            section: "CAN Bus Protocol & Interface Mapping",
            content: `The ${vehicle} utilize standard high-speed ISO 15765-4 CAN signals operating at 500 kbps on pins 6 and 14 of the standard 16-pin OBD-II J1962 port configuration. The Astrateq Gadgets physical interface uses differential receiver transceivers with high electromagnetic immunity (EMI) shielding to prevent noise injection, ensuring zero cross-talk with proprietary steer-by-wire, brake, or active safety stability controllers.`
          },
          {
            section: "Hardware Integration & Current Draw Profile",
            content: `Astrateq Gadgets units feature class-leading active energy management. Drawing under 15mA in sleeping mode, transitioning seamlessly via low-power sleep wake timers during engine startup cycles. Powered on the 12V terminal line (pin 16), it will not trigger battery drain warnings even during deep freezing Canadian climate periods. Integrated thermal overload protection keeps device operation temperature extremely stable.`
          },
          {
            section: "ICES-003 & Compliance Validation Status",
            content: `Diagnostic system compliant under Transport Canada guidelines and tested against FCC Part 15 and ICES-003 limits for Class B digital device emission thresholds. Physical connection conforms with vehicle warranty acts, preserving factory bumper-to-bumper protection because commands are strictly passive. Complete physical diagnostic loop certified safe for continuous cabin operations.`
          }
        ],
        configurationBlueprint: [
          {
            section: "Executive Overview & System Baseline",
            content: `This technical configuration blueprint specifies the operational threshold mapping for the ${vehicle} integrating the Astrateq Gadgets sovereign telemetry loop. By establishing standard hardware integrity layers, the system guarantees instant compatibility with vehicle cabin accessories while retaining high-precision camera visual stabilization loops.`
          },
          {
            section: "Hardware Integrity & Supercapacitor Thermal Shield",
            content: `Engineered specifically to bypass commercial battery failure thresholds. Unlike lithium-based units which swell, puncture, or fail under peak temperature offsets, Astrateq Gadgets leverages dual-cell supercapacitors maintaining active buffer charge. Certified for optimal thermal stability from -35°C to 85°C. Reliable power buffer is guaranteed under freezing winter cycles typical of Canadian territories.`
          },
          {
            section: "Data Isolation Protocols & Privacy Shunting",
            content: `Astrateq Gadgets secures vehicle telemetry data by executing processing entirely at the sovereign edge. No vehicle speed coordinates, sensor mappings, or route trails are transmitted to remote servers during active telemetry scans. Data storage leverages encrypted on-board NAND memory blocks utilizing AES-256 standard, with hardware shunts preventing unauthorized external access over OBD portals.`
          },
          {
            section: "System Architecture Summary & Core Processing",
            content: `The on-board processor architecture is governed by a high-efficiency dual-core ARM Cortex microprocessor operating at 1.2GHz. Unified hardware architecture allows rapid decoding of secondary sensor streams within 14ms of trigger events. Dynamic sensor-fusion pipeline combines accelerometer, gyro, and optical imagery with OBD passive packets to deliver optimal preventative diagnostics.`
          }
        ]
      };
    };

    if (!apiKey) {
      console.log("No GEMINI_API_KEY environment variable found. Emitting fallback report structure.");
      return res.json({ aiGenerated: false, data: getFallbackData() });
    }

    try {
      // Lazy load & initialize GoogleGenAI as required by rules
      const { GoogleGenAI, Type } = await import("@google/genai");
      
      const ai = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            'User-Agent': "aistudio-build",
          }
        }
      });

      const promptString = `You are the Lead Hardware Engineer at Astrateq Gadgets. Write a highly professional, technically credible, and premium engineering diagnostic report and configuration blueprint customized for a "${vehicle}".
Your response must be extremely high-fidelity and specific to standard OBD-II connections and edge telemetry on this specific car.
If this vehicle is an EV or Hybrid, explain that Astrateq Gadgets prevents secondary module battery drain. If it's gasoline, explain passive ECU polling safety.

Format the output ONLY as a valid JSON object matching the following schema structure:
{
  "diagnosticReport": [
    { "section": "Executive Diagnostic Summary", "content": "3 sentences detailing specific passive read-only OBD mapping for this car." },
    { "section": "CAN Bus Protocol & Interface Mapping", "content": "3 sentences detailing the diagnostic connection pin mappings (pins 6/14 high-speed CAN) and EMI noise-prevention shields for this vehicle configuration." },
    { "section": "Hardware Integration & Current Draw Profile", "content": "3 sentences detailing how its active power consumption of 15mA prevents car battery warning triggers." },
    { "section": "ICES-003 & Compliance Validation Status", "content": "3 sentences detailing compliance with Transport Canada, and why it is 100% compliant and does not void warranty." }
  ],
  "configurationBlueprint": [
    { "section": "Executive Overview & System Baseline", "content": "3 sentences outlining the telemetry processing setup on the ${vehicle}." },
    { "section": "Hardware Integrity & Supercapacitor Thermal Shield", "content": "3 sentences explaining the benefits of our supercapacitors over lithium batteries, specifically operating at sub-zero temperatures (down to -35°C) in cold Canadian climates." },
    { "section": "Data Isolation Protocols & Privacy Shunting", "content": "3 sentences explaining how local on-board edge diagnostics run securely without streaming data to external cloud systems, maintaining 100% driver privacy." },
    { "section": "System Architecture Summary & Core Processing", "content": "3 sentences explaining the dual-core ARM Cortex microprocessor and sensor fusion pipeline performance." }
  ]
}`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: promptString,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              diagnosticReport: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    section: { type: Type.STRING },
                    content: { type: Type.STRING }
                  },
                  required: ["section", "content"]
                }
              },
              configurationBlueprint: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    section: { type: Type.STRING },
                    content: { type: Type.STRING }
                  },
                  required: ["section", "content"]
                }
              }
            },
            required: ["diagnosticReport", "configurationBlueprint"]
          }
        }
      });

      const responseText = response.text || "";
      const cleaned = responseText.trim();
      let parsedData;
      try {
        parsedData = JSON.parse(cleaned);
      } catch (parseErr) {
        console.error("Failed to parse Gemini JSON, falling back to static template:", parseErr);
        parsedData = getFallbackData();
      }

      return res.json({
        aiGenerated: true,
        data: parsedData
      });

    } catch (sdkError) {
      console.error("Gemini SDK execution failed, leveraging high-quality fallback:", sdkError);
      return res.json({ aiGenerated: false, data: getFallbackData() });
    }

  } catch (error: any) {
    console.error("General API Error in generate-lead-magnet:", error);
    res.status(500).json({ error: error.message });
  }
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
