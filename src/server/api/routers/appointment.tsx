import { createTransport } from "nodemailer";
import { render } from "@react-email/render";
import { TRPCError } from "@trpc/server";
import { AppointmentRequestEmail } from "~/emails/appointment-request-email";
import { appointmentFormSchema } from "~/lib/validators/appointment";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { env } from "~/env";

export const appointmentRouter = createTRPCRouter({
  create: publicProcedure
    .input(appointmentFormSchema)
    .mutation(async ({ input }) => {
      const transporter = createTransport({
        host: env.SMTP_HOST,
        port: env.SMTP_PORT,
        secure: true,
        auth: { user: env.SMTP_USER, pass: env.SMTP_PASS },
      });

      const emailHtml = await render(<AppointmentRequestEmail {...input} />);

      const mailOptions = {
        from: `Harshem Website <${env.SMTP_USER}>`,
        to: env.RECIPIENT_EMAIL,
        subject: `Appointment Request: ${input.firstName} ${input.lastName}`,
        html: emailHtml,
      };

      try {
        await transporter.sendMail(mailOptions);
        return { success: true };
      } catch (error) {
        console.error("Failed to send appointment email:", error);
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: "Failed to send appointment request.",
        });
      }
    }),
});