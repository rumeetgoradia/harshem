import { PROVIDERS } from "~/content/providers";
import { ProviderDisplay } from "./_components/provider-display";

export default function ProvidersPage() {
  return (
    <main className="container mx-auto px-8 py-12">
      <h1 className="text-5xl font-semibold">Providers</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 w-full mt-6">
        {PROVIDERS.map((provider) => (
          <ProviderDisplay
            provider={provider}
            key={`${provider.name}-provider-display`}
          />
        ))}
      </div>
    </main>
  );
}
