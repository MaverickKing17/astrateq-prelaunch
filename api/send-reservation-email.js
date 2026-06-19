import { Resend } from "resend";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const { email, selectedTier, simulatedAmount, timestamp } = req.body;
    
    console.log("SEND EMAIL ROUTE HIT");
    console.log("Recipient email:", email);
    console.log("Selected tier:", selectedTier);
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);

    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("Validation failure: RESEND_API_KEY missing on server");
      return res.status(400).json({ success: false, error: 'RESEND_API_KEY missing on server' });
    }
    if (!email) {
      console.log("Validation failure: email is missing");
      return res.status(400).json({ success: false, error: 'email is required' });
    }
    if (!selectedTier) {
      console.log("Validation failure: selectedTier is missing");
      return res.status(400).json({ success: false, error: 'selectedTier is required' });
    }

    const fromAddress = "Astrateq Reservations <reservations@astrateqgadgets.com>";
    const resolvedTimestamp = timestamp 
      ? new Date(timestamp).toLocaleString("en-US", { timeZone: "America/Toronto" }) + " EST" 
      : new Date().toLocaleString("en-US", { timeZone: "America/Toronto" }) + " EST";
    const amount = simulatedAmount || "$0.00 CAD";

    const subject = "Your Astrateq Founding Cohort Reservation Was Received";

    // Build the dynamic, responsive email HTML template
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Astrateq Reservation Confirmed</title>
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; margin: 0; padding: 0; background-color: #f4f5f7; color: #1e293b; }
          .container { max-width: 600px; margin: 40px auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); border: 1px solid #e2e8f0; }
          .header { background-color: #09090b; padding: 40px 30px; text-align: center; position: relative; border-bottom: 4px solid #10b981; }
          .brand-stub { font-size: 10px; font-weight: 900; color: #10b981; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 5px; }
          .title { font-size: 20px; font-weight: 900; color: #ffffff; letter-spacing: -0.5px; margin: 0; text-transform: uppercase; }
          .content { padding: 40px 30px; }
          .salutation { font-size: 18px; font-weight: 800; color: #0f172a; margin-top: 0; margin-bottom: 12px; }
          .text { font-size: 14px; line-height: 1.6; color: #475569; margin-bottom: 24px; font-weight: 500; }
          .card { background-color: #f8fafc; border-radius: 12px; padding: 20px; border: 1px solid #e2e8f0; margin-bottom: 24px; }
          .card-title { font-size: 11px; font-weight: 800; color: #1e1b4b; text-transform: uppercase; letter-spacing: 1.5px; margin: 0 0 10px 0; display: flex; align-items: center; }
          .dot { width: 8px; height: 8px; background-color: #10b981; border-radius: 50%; display: inline-block; margin-right: 8px; }
          .spec-row { font-size: 13px; line-height: 1.5; color: #334155; margin-bottom: 6px; }
          .spec-row strong { color: #0f172a; font-weight: 700; }
          .footer { background-color: #f1f5f9; padding: 30px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 11px; color: #64748b; line-height: 1.6; }
          .badge { display: inline-block; padding: 4px 10px; border-radius: 99px; font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 1px; }
          .badge-success { background-color: #d1fae5; color: #065f46; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <div class="brand-stub">Astrateq Security Systems</div>
            <h1 class="title">Reservation Status Received</h1>
          </div>
          <div class="content">
            <h2 class="salutation">Hello,</h2>
            <p class="text">
              We have received your pre-launch market validation reservation for the founding cohort.
            </p>
    
            <div class="card" style="border-left: 4px solid #10b981;">
              <h3 class="card-title">
                <span class="dot"></span> RESERVATION & VALIDATION PARAMETERS:
              </h3>
              <div class="spec-row">• Selected Early-Access Tier: <strong>${selectedTier}</strong></div>
              <div class="spec-row">• Simulated Reservation Price: <strong>${amount}</strong></div>
              <div class="spec-row">• User Email: <strong>${email}</strong></div>
              <div class="spec-row">• Timestamp: <strong>${resolvedTimestamp}</strong></div>
              <div class="spec-row">• Validation Status: <span class="badge badge-success">No Charge</span></div>
            </div>
    
            <div class="card" style="background-color: #fef2f2; border: 1px solid #fca5a5; border-left: 4px solid #ef4444; padding: 15px;">
              <h4 style="margin: 0 0 8px 0; color: #991b1b; font-size: 13px; font-weight: 800; text-transform: uppercase;">⚠️ TRANSPARENCY & PILOT NOTICE</h4>
              <p style="margin: 0; font-size: 12px; line-height: 1.5; color: #7f1d1d; font-weight: 600;">
                No payment was charged today.<br/>
                No authorization hold was placed.<br/>
                This reservation is used to validate market demand before manufacturing begins.<br/>
                Your selected early-access tier has been recorded.<br/>
                You are expressing interest in a potential founding cohort allocation.
              </p>
            </div>
    
            <p class="text">
              We appreciate your feedback and early expression of interest. Your dynamic vehicle compatibility parameters are helping us map the precise needs of Canadian drivers.
            </p>
          </div>
          
          <div class="footer">
            <p style="margin: 0 0 10px 0; font-weight: 700; color: #475569;">ASTRATEQ SECURE EDGE HARDWARE DEPLOYMENT</p>
            <p style="margin: 0 0 10px 0;">This transmission is intended strictly for the registered recipient. Hardware read-only CAN bus integrations conform securely to ICES-003 constraints and Transport Canada passive framework guidelines.</p>
            <p style="margin: 0; color: #94a3b8;">© 2026 Astrateq Technologies. Toronto, ON, Canada.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    console.log("Attempting to send Astrateq confirmation email via Resend SDK");

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromAddress,
      to: email,
      subject: subject,
      html: htmlContent,
      reply_to: "kingnarmer702@gmail.com"
    });

    console.log("Resend response payload:", result);

    let emailId = null;
    let errorMsg = null;

    if (result && typeof result === "object") {
      if (result.data && result.data.id) {
        emailId = result.data.id;
      } else if (result.id) {
        emailId = result.id;
      }
      if (result.error) {
        errorMsg = result.error.message || JSON.stringify(result.error);
      }
    }

    if (!emailId) {
      return res.status(400).json({
        success: false,
        error: errorMsg || "Failed to dispatch email via Resend API (No email ID returned)."
      });
    }

    return res.status(200).json({
      success: true,
      resendId: emailId
    });

  } catch (err) {
    console.error("Error sending reservation confirmation email:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
