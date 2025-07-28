import { PROVIDERS } from "~/lib/constants";
import { ProviderCard } from "~/components/providers/provider-card";

export default function ProvidersPage() {
  return (
    <div className="flex justify-center">
      <div className="container max-w-[64rem] space-y-16 px-8 py-16">
        <h1 className="text-4xl font-bold tracking-tight">Providers</h1>

        <div className="space-y-20">
          {PROVIDERS.map((provider, index) => (
            <ProviderCard
              key={provider.name}
              provider={provider}
              // Alternate the image position based on the index (0, 1, 2, ...)
              imagePosition={index % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </div>
  );
}