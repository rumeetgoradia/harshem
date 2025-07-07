import Image from "next/image";
import { type Provider } from "~/lib/constants";
import { cn } from "~/lib/utils";

type ProviderCardProps = {
  provider: Provider;
  imagePosition?: "left" | "right";
};

export function ProviderCard({
  provider,
  imagePosition = "left",
}: ProviderCardProps) {
  return (
    <article
      className="grid grid-cols-1 items-start gap-6 md:grid-cols-4 md:gap-10"
    >
      <div
        className={cn(
          "relative aspect-[3/4] w-full max-w-sm md:col-span-1",
          // On desktop, move the image to the right if specified
          imagePosition === "right" && "md:order-last",
        )}
      >
        <Image
          src={provider.image}
          alt={`Photograph of ${provider.name}`}
          fill
          className="rounded-md object-cover object-center"
          placeholder="blur"
          sizes="(max-width: 768px) 80vw, 33vw"
        />
      </div>

      {/* --- Text Section --- */}
      <div className="md:col-span-3">
        <h2 className="mb-4 text-2xl font-semibold">{provider.name}</h2>
        <p className="text-muted-foreground">{provider.bio}</p>
      </div>
    </article>
  );
}