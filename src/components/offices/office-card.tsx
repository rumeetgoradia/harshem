import { Clock, MapPin, Phone, Printer } from "lucide-react";
import { DAYS, type Office } from "~/lib/constants";
import { cn, formatTime } from "~/lib/utils";

type OfficeCardProps = {
  office: Office;
};

export function OfficeCard({ office }: OfficeCardProps) {
  return (
    <article className="flex flex-col gap-4">
      <h2 className="text-2xl font-semibold">{office.title}</h2>

      <dl className="grid grid-cols-[max-content_1fr] items-start gap-x-4 gap-y-3 text-sm md:text-base">
        {/* Address */}
        <dt className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="size-4" />
          <span>Address</span>
        </dt>
        <dd>
          <a
            href={office.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-primary hover:underline"
          >
            {office.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </a>
        </dd>

        {/* Phone */}
        <dt className="flex items-center gap-2 text-muted-foreground">
          <Phone className="size-4" />
          <span>Phone</span>
        </dt>
        <dd>
          <a
            href={`tel:${office.phone}`}
            className="transition-colors hover:text-primary hover:underline"
          >
            {office.phone}
          </a>
        </dd>

        {/* Fax */}
        <dt className="flex items-center gap-2 text-muted-foreground">
          <Printer className="size-4" />
          <span>Fax</span>
        </dt>
        <dd>{office.fax}</dd>

        {/* Hours */}
        <dt className="flex items-center gap-2 text-muted-foreground">
          <Clock className="size-4" />
          <span>Hours</span>
        </dt>
        <dd>
          <div className="flex flex-col">
            {DAYS.map((day) => {
              const dayHours = office.hours[day];
              return (
               <div key={day} className={cn("grid grid-cols-[1fr_auto] gap-x-4 py-1 px-2", !dayHours && 'bg-gray-100')}>
                  <span>{day}</span>
                  {dayHours ? (
                    <span className="font-mono text-foreground/80">
                      {formatTime(dayHours.open)} – {formatTime(dayHours.close)}
                    </span>
                  ) : (
                    <span className="pt-1 font-mono text-xs text-muted-foreground">
                      CLOSED
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </dd>
      </dl>
    </article>
  );
}