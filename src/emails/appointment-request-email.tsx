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
import { type AppointmentFormData } from "~/lib/validators/appointment";
import { formatTime } from "~/lib/utils";

export function AppointmentRequestEmail(props: AppointmentFormData) {
  const {
    firstName,
    lastName,
    dateOfBirth,
    email,
    phone,
    newPatient,
    officePreference,
    providerPreference,
    appointmentType,
    firstDatePreference,
    firstTimePreference,
    secondDatePreference,
    secondTimePreference,
  } = props;

  return (
    <Html>
      <Head />
      <Preview>
        New Appointment Request from {firstName} {lastName}
      </Preview>
      <Body style={main}>
        <Container style={container}>
          <Heading style={heading}>New Appointment Request</Heading>
          
          <Section style={section}>
            <Heading as="h2" style={subheading}>Patient Details</Heading>
            <Text style={paragraph}><strong>Name:</strong> {firstName} {lastName}</Text>
            <Text style={paragraph}><strong>New Patient:</strong> {newPatient ? "Yes" : "No"}</Text>
            <Text style={paragraph}><strong>Date of Birth:</strong> {dateOfBirth}</Text>
            <Text style={paragraph}><strong>Phone:</strong> {phone}</Text>
            <Text style={paragraph}><strong>Email:</strong> {email}</Text>
          </Section>

          <Hr style={hr} />

          <Section style={section}>
            <Heading as="h2" style={subheading}>Appointment Preferences</Heading>
            <Text style={paragraph}><strong>Office:</strong> {officePreference}</Text>
            <Text style={paragraph}><strong>Provider:</strong> {providerPreference}</Text>
            <Text style={paragraph}><strong>Type:</strong> {appointmentType}</Text>
            <Hr style={hrLight} />
            <Text style={paragraph}><strong>1st Preference:</strong> {firstDatePreference} at {formatTime(firstTimePreference)}</Text>
            {secondDatePreference && secondTimePreference && (
              <Text style={paragraph}><strong>2nd Preference:</strong> {secondDatePreference} at {formatTime(secondTimePreference)}</Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

// ... Add the same styles from the contact-form-email.tsx here ...
const main = { backgroundColor: "#f6f9fc", fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif' };
const container = { backgroundColor: "#ffffff", margin: "0 auto", padding: "20px 0 48px", marginBottom: "64px", border: "1px solid #f0f0f0", borderRadius: "4px" };
const section = { padding: "0 40px" };
const heading = { fontSize: "24px", letterSpacing: "-0.5px", lineHeight: "1.3", fontWeight: "600", color: "#484848", padding: "0 40px" };
const subheading = { fontSize: "18px", letterSpacing: "-0.4px", lineHeight: "1.3", fontWeight: "600", color: "#484848", marginTop: "10px" };
const paragraph = { fontSize: "16px", lineHeight: "1.5", color: "#484848" };
const hr = { borderColor: "#f0f0f0", margin: "20px 0", width: "100%" };
const hrLight = { borderColor: "#e0e0e0", margin: "15px 0", width: "100%" };