import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import { TRPCError } from "@trpc/server";
import React from "react";
import { ContactFormEmail } from "~/emails/contact-form-email";
import { contactFormSchema } from "~/lib/validators/contact";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(contactFormSchema)
    .mutation(async ({ input }) => {
      // Honeypot check for spam
      if (input.url) {
        // Silently fail to mislead bots
        return { success: true };
      }

      const transporter = createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: true,
        auth: {
          user: env.SMTP_USER,
          pass: env.SMTP_PASS,
        },
      });

      const emailHtml = await render(<ContactFormEmail {...input} />);

      const mailOptions = {
        from: `Harshem Website <${env.SMTP_USER}>`,
        to: env.RECIPIENT_EMAIL,
        subject: `New Message from ${input.name}`,
        html: emailHtml,
        text: input.message,
      };

      try {
        await transporter.sendMail(mailOptions);
        return { success: true };
      } catch (error) {
        console.error("Failed to send email:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send message.",
        });
      }
    }),
});