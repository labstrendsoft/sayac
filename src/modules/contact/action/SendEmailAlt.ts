// app/actions/sendEmail.ts
'use server';

import nodemailer from 'nodemailer';

type ContactEmailData = {
	nombre: string;
	empresa: string;
	celular: string;
	correo: string;
	titulo: string;
	mensaje: string;
	recaptchaToken: string;
};

async function verifyRecaptcha(token: string) {
	const response = await fetch(
		'https://www.google.com/recaptcha/api/siteverify',
		{
			method: 'POST',
			headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
			body: new URLSearchParams({
				secret: process.env.RECAPTCHA_SECRET_KEY!,
				response: token,
			}),
		}
	);

	const data = await response.json();

	if (!data.success) {
		console.log('reCAPTCHA no válido:', data);
		return false;
	}

	if ((data.score ?? 0) < 0.5) {
		console.log('reCAPTCHA score bajo:', data);
		return false;
	}

	return true;
}

export async function sendEmail(data: ContactEmailData) {
	const { nombre, empresa, celular, correo, titulo, mensaje, recaptchaToken } =
		data;

	const isHuman = await verifyRecaptcha(recaptchaToken);
	if (!isHuman) {
		return { success: false, error: 'Falló la verificación de reCAPTCHA' };
	}

	try {
		const transporter = nodemailer.createTransport({
			host: 'smtp.zoho.com',
			port: 465,
			secure: true,
			auth: {
				user: process.env.ZOHO_USER,
				pass: process.env.ZOHO_PASS,
			},
		});

		const htmlContent = `
      <h2>Nuevo mensaje desde formulario de contacto</h2>
      <p><strong>Nombre:</strong> ${nombre}</p>
      <p><strong>Empresa:</strong> ${empresa}</p>
      <p><strong>Celular:</strong> ${celular}</p>
      <p><strong>Correo:</strong> ${correo}</p>
      <p><strong>Título:</strong> ${titulo}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje}</p>
      <hr />
    `;

		await transporter.sendMail({
			from: `"Grupo Sayaq" <${process.env.ZOHO_USER}>`,
			replyTo: correo, // correo del usuario
			to: 'administracion@gruposayaq.com',
			subject: `Formulario de contacto: ${titulo}`,
			text: `
Nuevo mensaje desde formulario de contacto

Nombre: ${nombre}
Empresa: ${empresa}
Celular: ${celular}
Correo: ${correo}
Título: ${titulo}
Mensaje: ${mensaje}
      `,
			html: htmlContent,
		});

		return { success: true };
	} catch (error) {
		console.error(error);
		return { success: false, error };
	}
}
