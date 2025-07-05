import type { Provider } from "~/content/providers";

export function ProviderDisplay({ provider }: { provider: Provider }) {
  return (
    <div>
      <h2 className="text-header">{provider.name}</h2>
      <div className="flex justify-center w-full mb-4 md:hidden lg:hidden">
        <div className="h-[300px] w-full sm:w-[200px] relative">
          <img
            src={provider.image}
            alt={provider.name}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <p className="text-paragraph mb-4">
        <div className="float-left h-[300px] w-[200px] mr-4 mb-4 relative hidden sm:block md:hidden lg:block">
          <img
            src={provider.image}
            alt={provider.name}
            className="h-full w-full object-cover"
          />
        </div>
        {provider.bio}
      </p>
    </div>
  );
}
