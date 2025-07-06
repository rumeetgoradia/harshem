import Link from "next/link";
import { LandingHero } from "~/components/home/landing-hero";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <>
      <LandingHero />

      <section className="flex justify-center py-16">
        <div className="container max-w-[64rem] space-y-8 px-8">
          <h3 className="text-3xl font-semibold text-foreground">
            Welcome to Harshem!
          </h3>

          <div className="text-lg space-y-4 text-muted-foreground">
            <p>
              Harshem Family Practice is an outpatient medical practice for all
              primary care, geriatric, adolescent, and a majority of women's
              health needs. We have been serving patients in Central and Northern
              New Jersey since 2000 with the goal of providing high-quality modern
              medical care to maintain and improve overall patient health. We
              partner with our patients to provide effective management of chronic
              and acute conditions, all while empowering patients to play an
              active role in their own healthcare.
            </p>
            <p>
              We at Harshem Family Practice offer a wide range of healthcare
              services that are preventative, diagnostic, and therapeutic to
              effectively treat a wide range of acute and chronic conditions. Our
              full range of services are designed to offer patients continuity of
              care in the outpatient, inpatient, and nursing home settings.
            </p>
            <p>
              We currently have two freestanding offices in New Jersey located in
              Rahway and Elizabeth. We accept a majority of health insurance plans
              and serve patients from a variety of ethnic, racial, and cultural
              backgrounds. Our doctors and staff speak multiple languages and are
              able to provide effective translation for several commonly spoken
              languages. We welcome you to explore our website to learn more about{" "}
              <Link href="/providers" className="font-medium text-primary hover:underline">
                our providers
              </Link>
              ,{" "}
              <Link href="/services" className="font-medium text-primary hover:underline">
                our full range of services
              </Link>
              , and{" "}
              <Link href="/insurance" className="font-medium text-primary hover:underline">
                our accepted insurance plans
              </Link>
              .
            </p>
          </div>
          <div className='w-full flex justify-center'>
            <Button asChild size="lg" className="mt-4 uppercase text-lg p-6 tracking-wide">
              <Link href="/appointment">Schedule an Appointment</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}