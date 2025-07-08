import { SERVICE_CATEGORIES } from "~/lib/constants";
import { ServiceCategory } from "~/components/services/service-category";

export default function ServicesPage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-[64rem] space-y-12 px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Services</h1>

        <div className="space-y-12">
          {SERVICE_CATEGORIES.map((category) => (
            <ServiceCategory
              key={category.title}
              title={category.title}
              services={category.services}
            />
          ))}
        </div>
      </div>
    </div>
  );
}