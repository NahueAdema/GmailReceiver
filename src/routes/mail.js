const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const { EMAIL_USER, EMAIL_PASS } = require("../config/env");

const transporter = nodemailer.createTransport({
  service: "gmail", // Puedes usar cualquier servicio SMTP (Gmail, Outlook, etc.)
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
});

router.post("/send", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const mailOptions = {
    from: `"${name}" <${email}>`, // El remitente será el usuario
    to: EMAIL_USER, // El destinatario serás tú
    subject: "Nuevo mensaje desde el formulario de contacto",
    text: `Has recibido un mensaje de:
- Nombre: ${name}
- Email: ${email}

Mensaje:
${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    console.error("Error al enviar el correo:", error);
    res.status(500).json({ error: "Error al enviar el correo" });
  }
});

module.exports = router;
