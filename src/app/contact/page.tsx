import { ContactForm } from "~/components/contact/contact-form";

export default function ContactPage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-[64rem] space-y-12 px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Contact Us</h1>
        <ContactForm />
      </div>
    </div>
  );
}