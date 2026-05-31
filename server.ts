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

// API Route - Send Premium Transactional Email via Resend
app.post("/api/send-email", async (req, res) => {
  try {
    const { email, name, vehicle, bundle, pdfDiagnostics, pdfBlueprint } = req.body;
    if (!email) {
      return res.status(400).json({ error: "Missing recipient email address." });
    }

    const apiKey = process.env.RESEND_API_KEY;
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Astrateq Labs <onboarding@resend.dev>";
    const isBundlePurchase = !!bundle;
    
    // Choose subject line depending on context (Checkout vs. Waitlist Free Report)
    const subject = isBundlePurchase 
      ? `🔐 FOR RESERVED ACCOUNTS: Your Astrateq ${bundle} Reservation Spot Mapped Securely`
      : `🍁 CUSTOM REPORT: Your Astrateq Telemetry Diagnostics & Blueprint for ${vehicle || "your vehicle"}`;

    const parsedName = name || email.split("@")[0];
    const uppercaseVehicle = (vehicle || "Universal OBD-II Vehicle").toUpperCase();
    
    // Build an ultra-polished, Canva/Tesla/Apple styled HTML email template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Astrateq Laboratory Deliverable</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f5f7; color: #1e293b; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; }
          .header { background-color: #09090b; padding: 40px 30px; text-align: center; position: relative; border-bottom: 4px solid #e11d4e; }
          .brand-stub { font-size: 10px; font-weight: 900; color: #e11d4e; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 5px; }
          .title { font-size: 24px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; margin: 0; text-transform: uppercase; }
          .content { padding: 40px 30px; }
          .salutation { font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 12px; }
          .text { font-size: 14px; line-height: 1.6; color: #475569; margin-bottom: 24px; font-weight: 500; }
          .card { background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 24px; }
          .card-title { font-size: 11px; font-weight: 800; color: #1e1b4b; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 10px 0; display: flex; align-items: center; }
          .dot { width: 8px; height: 8px; background-color: #10b981; border-radius: 50%; display: inline-block; margin-right: 8px; }
          .spec-row { font-size: 13px; line-height: 1.5; color: #334155; margin-bottom: 6px; }
          .spec-row strong { color: #0f172a; font-weight: 700; }
          .cta-btn { display: block; background-color: #0f172a; color: #ffffff !important; text-decoration: none; text-align: center; padding: 14px 24px; border-radius: 10px; font-size: 13px; font-weight: 800; text-transform: uppercase; letter-spacing: 1.5px; margin: 30px auto 10px auto; max-width: 280px; box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15); }
          .footer { background-color: #f1f5f9; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.6; }
          .badge { display: inline-block; padding: 4px 10px; border-radius: 99px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
          .badge-success { background-color: #d1fae5; color: #065f46; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand-stub">Astrateq Security Systems</div>
            <h1 class="title">${isBundlePurchase ? 'Reservation Secured' : 'Technical Specifications Mapped'}</h1>
          </div>
          <div class="content">
            <h2 class="salutation">Hello, ${parsedName}</h2>
            
            <p class="text">
              ${isBundlePurchase 
                ? `Congratulations! Your pre-launch order for the premium <strong>Astrateq ${bundle}</strong> hardware suite is officially locked. We have successfully reserved your placement under our early-access priority program.` 
                : `Thank you for your interest in Astrateq. Your tailored hardware-level specifications have been compiled securely by our lab microprocessors.`
              }
            </p>

            <div class="card">
              <h3 class="card-title">
                <span class="dot"></span> SECURE DIAGNOSTIC CERTIFICATE RECORD:
              </h3>
              <div class="spec-row">• Account Holder: <strong>${parsedName}</strong></div>
              <div class="spec-row">• Mapped Profile: <strong style="color: #4f46e5;">${uppercaseVehicle}</strong></div>
              ${isBundlePurchase ? `<div class="spec-row">• Product Package: <strong>${bundle}</strong> (Deposit Mapped $49.00 CAD)</div>` : ''}
              <div class="spec-row">• Status: <span class="badge badge-success">Verified Passive Loop</span></div>
              <div class="spec-row">• Privacy Status: <strong>0% Cloud-dependency. Edge-isolated.</strong></div>
            </div>

            <p class="text" style="margin-bottom: 10px;">
              Enclosed with this transmission, please find your highly-polished, Canva-styled <strong>Astrateq Diagnostic Assessment</strong> and <strong>Sovereign Configuration Blueprint</strong> generated specifically for your onboard ECU model. 
            </p>

            <a href="${process.env.APP_URL || 'https://astrateq.com'}" class="cta-btn">Access Telemetry Dashboard</a>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px 0; font-weight: 700; color: #475569;">ASTRATEQ SECURE EDGE HARDWARE DEPLOYMENT</p>
            <p style="margin: 0 0 10px 0;">This transmission is intended strictly for the registered recipient. Hardware read-only CAN bus integrations conform securely to ICES-003 constraints and Transport Canada passive framework guidelines.</p>
            <p style="margin: 0; color: #94a3b8;">© 2026 Astrateq Technologies. Vancouver, BC, Canada.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Package attachments
    const attachments = [];
    if (pdfDiagnostics) {
      const cleanDiagBase64 = pdfDiagnostics.includes(",") ? pdfDiagnostics.split(",")[1] : pdfDiagnostics;
      attachments.push({
        content: cleanDiagBase64,
        filename: "astrateq_diagnostic_report.pdf",
        content_type: "application/pdf"
      });
    }
    if (pdfBlueprint) {
      const cleanBlueBase64 = pdfBlueprint.includes(",") ? pdfBlueprint.split(",")[1] : pdfBlueprint;
      attachments.push({
        content: cleanBlueBase64,
        filename: "astrateq_configuration_blueprint.pdf",
        content_type: "application/pdf"
      });
    }

    if (!apiKey) {
      console.log("---- RESEND DEMO DISPATCH MODE (NO API KEY SET) ----");
      console.log(`To: ${email}`);
      console.log(`Subject: ${subject}`);
      console.log(`Attachments Loaded: ${attachments.length} files`);
      console.log("----------------------------------------------------");
      
      return res.json({
        success: true,
        mode: "demo",
        message: "Email dispatch compiled perfectly! To live-deliver this beautiful report directly to your inbox, configure your RESEND_API_KEY in the user secrets panel."
      });
    }

    // Call Resend API via robust native fetch to avoid package mismatches
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        from: fromAddress,
        to: email,
        subject: subject,
        html: htmlContent,
        attachments: attachments.length > 0 ? attachments : undefined
      })
    });

    const responseBody: any = await response.json();

    if (!response.ok) {
      console.error("Resend API error:", responseBody);
      return res.status(response.status).json({ 
        success: false, 
        error: responseBody.message || "Failed to dispatch email via Resend API." 
      });
    }

    console.log(`Resend email sent successfully! ID: ${responseBody.id}`);
    return res.json({ 
      success: true, 
      mode: "live",
      message: "Your customized diagnostic report has been sent securely via Resend API!" 
    });

  } catch (err: any) {
    console.error("Error in /api/send-email:", err);
    res.status(500).json({ success: false, error: err.message });
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
