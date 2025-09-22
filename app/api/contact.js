import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end("Method Not Allowed");

    console.log("Received form data:", req.body);
    console.log("Email user env:", process.env.EMAIL_USER);
    console.log("Email pass env length:", process.env.EMAIL_PASS?.length);

  const { firstname, lastname, email, phone, service, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `New message from ${firstname} ${lastname}`,
      html: `
        <p><strong>Name:</strong> ${firstname} ${lastname}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send failed", err);
    res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
