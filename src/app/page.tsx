import Link from "next/link";
import { Button } from "~/components/ui/button";

export default function HomePage() {
  return (
    <main>
      <section className="relative h-[45vh] bg-black">
        <div className="absolute inset-0 z-10">
          <img
            src="/images/home/landing.jpg"
            alt="Harshem Family Practice"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-20 bg-black/50" />
        <div className="container mx-auto px-8 h-full flex flex-col justify-center relative z-30">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-brand-700 font-bold leading-tight mb-2">
            Harshem Family Practice
          </h1>
          <h2 className="text-2xl md:text-4xl text-white font-medium mb-8">
            Dr. Rita U. Goradia, MDPC
          </h2>
        </div>
      </section>
      <section className="container mx-auto px-8 py-16">
        <h3 className="text-header">Welcome to Harshem!</h3>
        <div className="flex flex-col gap-4">
          <p className="text-paragraph">
            Harshem Family Practice is an outpatient medical practice for all
            primary care, geriatric, adolescent, and a majority of women&apos;s
            health needs. We have been serving patients in Central and Northern
            New Jersey since 2000 with the goal of providing high-quality modern
            medical care to maintain and improve overall patient health. We
            partner with our patients to provide effective management of chronic
            and acute conditions, all while empowering patients to play an
            active role in their own healthcare.
          </p>
          <p className="text-paragraph">
            We at Harshem Family Practice offer a wide range of healthcare
            services that are preventative, diagnostic, and therapeutic to
            effectively treat a wide range of acute and chronic conditions. Our
            full range of services are designed to offer patients continuity of
            care in the outpatient, inpatient, and nursing home settings.
          </p>
          <p className="text-paragraph">
            We currently have two freestanding offices in New Jersey located in
            Rahway and Elizabeth. We accept a majority of health insurance plans
            and serve patients from a variety of ethnic, racial, and cultural
            backgrounds. Our doctors and staff speak multiple languages and are
            able to provide effective translation for several commonly spoken
            languages. We welcome you to explore our website to learn more about{" "}
            <Link href="/providers" className="text-brand-700">
              our providers
            </Link>
            ,{" "}
            <Link href="/services" className="text-brand-700">
              our full range of services
            </Link>
            , and{" "}
            <Link href="/insurance" className="text-brand-700">
              our accepted insurance plans
            </Link>
            .
          </p>
          <Link href="/appointment">
            <Button>Schedule an Appointment</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
