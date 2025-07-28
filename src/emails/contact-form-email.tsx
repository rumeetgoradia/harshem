import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { type ContactFormData } from "~/lib/validators/contact";

export function ContactFormEmail({
  name,
  email,
  phone,
  message,
}: ContactFormData) {
  return (
    <Html>
      <Head />
      <Preview>New Message from Harshem Website</Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Message via Contact Form</Heading>
          <Text style={paragraph}>{message}</Text>
          <Hr style={hr} />
          <Section>
            <Text style={details}>
              <strong>From:</strong> {name}
            </Text>
            <Text style={details}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={details}>
              <strong>Phone:</strong> {phone}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// Styles for the email
const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
  border: "1px solid #f0f0f0",
  borderRadius: "4px",
};

const heading = {
  fontSize: "24px",
  letterSpacing: "-0.5px",
  lineHeight: "1.3",
  fontWeight: "600",
  color: "#484848",
  padding: "0 40px",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#484848",
  padding: "0 40px",
};

const details = {
  fontSize: "14px",
  lineHeight: "1.2",
  color: "#5e5e5e",
  padding: "0 40px",
};

const hr = {
  borderColor: "#f0f0f0",
  margin: "20px 0",
};