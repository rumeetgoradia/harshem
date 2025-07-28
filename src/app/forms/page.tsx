import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function FormsPage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-[64rem] space-y-12 px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Patient Forms</h1>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">
            First-Time Registration Form
          </h2>
          <p className="leading-relaxed text-muted-foreground">
            If you are a first-time patient, please fill out the form below and
            bring it with you for your appointment. If you haven&apos;t made an
            appointment yet, please visit our{" "}
            <Link
              href="/appointment"
              className="font-medium text-primary transition-colors hover:underline"
            >
              appointments page
            </Link>{" "}
            or give us a call at{" "}
            <a
              href="tel:7323883006"
              className="font-medium text-primary transition-colors hover:underline"
            >
              (732) 388-3006
            </a>
            .
          </p>

          {/* This is the recommended way to use a Button as a link */}
          <Button asChild size="lg" className="mt-2">
            <a
              href="/forms/registration.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
            >
              Registration Form
            </a>
          </Button>
        </section>
      </div>
    </div>
  );
}