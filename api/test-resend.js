import { Resend } from "resend";

export default async function handler(req, res) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return res.status(400).json({ success: false, error: "RESEND_API_KEY missing on server" });
    }

    console.log("Attempting to send test Astrateq email to kingnarmer702@gmail.com");

    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: "Astrateq Reservations <reservations@astrateqgadgets.com>",
      to: "kingnarmer702@gmail.com",
      subject: "Astrateq Resend Test Email",
      html: `
        <h1>Astrateq Resend Test Email</h1>
        <p>This confirms the Resend backend route is working.</p>
      `,
      reply_to: "kingnarmer702@gmail.com"
    });

    console.log("Resend API test email response payload:", result);

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
        error: errorMsg || "Failed to dispatch test email via Resend API (No email ID returned)."
      });
    }

    return res.status(200).json({
      success: true,
      resendId: emailId
    });
  } catch (err) {
    console.error("Error in test-resend:", err);
    return res.status(500).json({ success: false, error: err.message });
  }
}
