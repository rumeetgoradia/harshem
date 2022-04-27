import type { NextApiRequest, NextApiResponse } from "next"
import { createTransport, SendMailOptions } from "nodemailer"
import { AppointmentFormData } from "./../../content/appointment"
import defaultHandler from "./_defaultHandler"

const handler = defaultHandler<NextApiRequest, NextApiResponse>().post(
	async (req, res) => {
		if (req.body.url) {
			res.status(404).send("")
			return
		}

		const transporter = createTransport({
			port: 465,
			host: "smtp.gmail.com",
			auth: {
				user: process.env.EMAIL_AGENT_ADDRESS,
				pass: process.env.EMAIL_AGENT_PASSWORD,
			},
			secure: true,
		})

		const {
			firstName,
			lastName,
			dateOfBirth,
			email,
			phone,
			appointmentType,
			officePreference,
			providerPreference,
			firstDatePreference,
			firstTimePreference,
			secondDatePreference,
			secondTimePreference,
			newPatient,
		} = req.body as AppointmentFormData

		const mailData: SendMailOptions = {
			from: `Harshem Website Manager ${"<"}${process.env.CONTACT_AGENT_EMAIL}>`,
			to: process.env.RECIPIENT,
			subject: `Appointment Request from ${firstName} ${lastName}`,
			text: req.body.message,
			html: `
            <!DOCTYPE html>
			<html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office">
			<head>
				<meta charset="UTF-8">
				<meta name="viewport" content="width=device-width,initial-scale=1">
				<meta name="x-apple-disable-message-reformatting">
				<title></title>
				<!--[if mso]>
				<noscript>
					<xml>
						<o:OfficeDocumentSettings>
							<o:PixelsPerInch>96</o:PixelsPerInch>
						</o:OfficeDocumentSettings>
					</xml>
				</noscript>
				<![endif]-->
				<style>
					h1, p {
						font-family: Arial, sans-serif;
					}
                    .bold {
                        font-weight: 600;
                    }
					* {
						box-sizing: border-box
					}
				</style>
			</head>
			<body style="margin:0;padding:0;">
			<div style="width: 100%;display:flex;justify-content:center">
				<div style="max-width: 500px;width: 100%;padding:1rem 2rem;">
                    <h1>Patient Info</h1>
                    <p><span class="bold">First Name:</span> ${firstName}</p>
                    <p><span class="bold">Last Name:</span> ${lastName}</p>
                    <p><span class="bold">New Patient:</span> ${
											newPatient ? "Yes" : "No"
										}</p>
                    <p><span class="bold">Date of Birth:</span> ${dateOfBirth}</p>
                    <p><span class="bold">Phone:</span> ${phone}</p>
                    <p><span class="bold">Email:</span> ${email}</p>
                    <br />
                    <h1>Appointment Info</h1>
                    <p><span class="bold">Date Preference:</span> ${firstDatePreference}, ${firstTimePreference}</p>
                    <p><span class="bold">2nd Date Preference:</span> ${
											secondDatePreference ? secondDatePreference : "None"
										}${
				secondDatePreference ? ", " + secondTimePreference : ""
			}</p>
                    <p><span class="bold">Office Preference:</span> ${officePreference}</p>
                    <p><span class="bold">Provider Preference:</span> ${providerPreference}</p>
                    <p><span class="bold">Appointment Type:</span> ${appointmentType}</p>
				</div>
			</div>
			</body>
			</html>
            `,
		}

		transporter.sendMail(mailData, function (err) {
			if (err) {
				res.status(500).send(err)
			} else {
				res.status(200).send("Message sent successfully")
			}
		})
	}
)

export default handler
