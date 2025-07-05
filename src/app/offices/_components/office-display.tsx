import { DAYS } from "~/constants/days";
import type { Office } from "~/content/offices";
import { convertTo12H } from "~/lib/time";

export function OfficeDisplay({ office }: { office: Office }) {
  return (
    <div>
      <h2 className="text-header">{office.title}</h2>
      <div className="grid gap-4 grid-cols-5">
        <div className="col-span-1">
          <p className="text-paragraph text-sm md:text-base lg:text-lg font-normal">
            Address
          </p>
        </div>
        <div className="col-span-4">
          <a
            href={office.googleMaps}
            target="_blank"
            rel="noreferrer"
            title={`View ${office.title} office on Google Maps`}
            className="transition-colors hover:text-brand-700 hover:underline"
          >
            {office.address.map((line) => (
              <p
                className="text-paragraph text-sm md:text-base lg:text-lg"
                key={`${office.title}-office-display-${line}-address-line`}
              >
                {line}
              </p>
            ))}
          </a>
        </div>
        <div className="col-span-1">
          <p className="text-paragraph text-sm md:text-base lg:text-lg font-normal">
            Phone
          </p>
        </div>
        <div className="col-span-4">
          <a
            href={`tel:${office.phone}`}
            title={`Call ${office.title} office`}
            className="text-paragraph text-sm md:text-base lg:text-lg transition-colors hover:text-brand-700 hover:underline"
          >
            {office.phone}
          </a>
        </div>
        <div className="col-span-1">
          <p className="text-paragraph text-sm md:text-base lg:text-lg font-normal">
            Fax
          </p>
        </div>
        <div className="col-span-4">
          <p className="text-paragraph text-sm md:text-base lg:text-lg">
            {office.fax}
          </p>
        </div>
        <div className="col-span-1">
          <p className="text-paragraph text-sm md:text-base lg:text-lg font-normal">
            Hours
          </p>
        </div>
        <div className="col-span-4">
          <div className="grid grid-cols-3 w-full">
            {DAYS.map((day) => {
              const dayHours = office.hours[day];
              return (
                <>
                  <div className="col-span-1">
                    <p className="text-paragraph text-sm lg:text-lg mr-4">
                      {day}
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-paragraph text-sm md:text-base lg:text-lg italic">
                      {dayHours ? (
                        <>
                          {convertTo12H(dayHours.open)} –{" "}
                          {convertTo12H(dayHours.close)}
                        </>
                      ) : (
                        "CLOSED"
                      )}
                    </p>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
