import { INSURANCE_PLANS } from "~/lib/constants";

export default function InsurancePage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-[64rem] space-y-12 px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Insurance</h1>

        {/* Billing Information Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Billing</h2>
          <p className="text-muted-foreground">
            We participate with most insurance plans. However, it is the
            patient's responsibility to understand whether his/her insurance
            has limits on the doctors you can see, or the services you can
            receive. If you provide complete and accurate information about your
            health insurance, we will submit claims to your insurance carrier and
            receive payments for services. Depending on your insurance coverage,
            you may be responsible for co-payments, co-insurance, or other
            deductible amounts. Please contact our billing office at{" "}
            <a
              href="tel:7323883006"
              className="font-medium text-primary transition-colors hover:underline"
            >
              (732) 388-3006
            </a>{" "}
            or call your insurance carrier for any billing related questions or
            concerns.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Accepted Insurance Plans</h2>
          
          <ul className="columns-1 gap-x-8 text-muted-foreground sm:columns-2 lg:columns-3">
            {INSURANCE_PLANS.map((plan) => (
              <li key={plan} className="mb-2 break-inside-avoid">
                {plan}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}