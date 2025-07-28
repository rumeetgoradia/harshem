import { OFFICES } from "~/lib/constants";
import { OfficeCard } from "~/components/offices/office-card";

export default function OfficesPage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-[64rem] space-y-10 px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Offices</h1>

        <div className="grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-2">
          {OFFICES.map((office) => (
            <OfficeCard key={office.title} office={office} />
          ))}
        </div>
      </div>
    </div>
  );
}