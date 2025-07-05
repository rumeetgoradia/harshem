import Link from "next/link";
import { NAV_ITEMS } from "~/constants/navigation";
import { OFFICES } from "~/content/offices";
import { Logo } from "./navbar/logo";

const SITE_NAME = "Harshem Family Practice";

export function Footer() {
  return (
    <footer className="bg-gray-100">
      <div className="container mx-auto px-8 pt-8 pb-4">
        <div className="flex flex-col gap-8 justify-start items-start w-full">
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-4 justify-start items-start">
              <h6 className="text-2xl sm:text-3xl opacity-60 font-medium">
                Harshem Family Practice
              </h6>
              <div className="flex gap-4 sm:gap-8 w-full">
                {OFFICES.map(({ address, phone }) => (
                  <div
                    key={`${address[0]}-footer-office`}
                    className="text-sm md:text-base opacity-60"
                  >
                    {address.map((line) => (
                      <p key={`${address[0]}-footer-office-${line}-line`}>
                        {line}
                      </p>
                    ))}
                    <a
                      href={`tel:${phone}`}
                      className="transition-colors hover:text-brand-700"
                    >
                      <p>{phone}</p>
                    </a>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-[157px] w-auto hidden md:block">
              <Logo />
            </div>
          </div>
          <hr className="border-t-gray-300 w-full" />
          <div className="grid gap-4 grid-cols-2 md:grid-cols-3 w-full">
            {NAV_ITEMS.map(({ title, path }) => (
              <span key={`${title}-footer-link`}>
                <Link
                  href={path}
                  title={title}
                  className="opacity-40 uppercase text-sm leading-none transition-all hover:text-brand-700 hover:opacity-100"
                >
                  {title}
                </Link>
              </span>
            ))}
          </div>
          <p className="opacity-40 font-light text-xs">
            {`© ${new Date().getFullYear()} ${SITE_NAME}`}
          </p>
        </div>
      </div>
    </footer>
  );
}