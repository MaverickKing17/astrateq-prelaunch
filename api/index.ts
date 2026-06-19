export default async function handler(req: any, res: any) {
  try {
    return res.status(200).json({
      status: "ok",
      message: "Astrateq Secure API Gateway Active"
    });
  } catch (error: any) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
