import { type Day } from "./days";

export type Office = {
  title: string;
  address: readonly string[];
  phone: string;
  fax: string;
  /**
   * A record of business hours for each day of the week.
   * A value of `null` indicates the office is closed on that day.
   */
  hours: Record<Day, { open: string; close: string } | null>;
  googleMapsUrl: string;
};

export const OFFICES: readonly Office[] = [
  {
    title: "Rahway",
    address: ["1003 St. Georges Ave.", "Rahway, NJ 07065"],
    phone: "(732) 388-3006",
    fax: "(732) 388-9878",
    hours: {
      Monday: { open: "09:00", close: "14:00" },
      Tuesday: { open: "15:00", close: "19:00" },
      Wednesday: { open: "09:00", close: "14:00" },
      Thursday: { open: "09:00", close: "14:00" },
      Friday: { open: "15:00", close: "19:00" },
      Saturday: { open: "08:30", close: "13:00" },
      Sunday: null,
    },
    googleMapsUrl: "https://goo.gl/maps/5WqDkB2r7yqtj1nZ7",
  },
  {
    title: "Elizabeth",
    address: ["700 N. Broad St.", "Suite 102", "Elizabeth, NJ 07208"],
    phone: "(908) 469-1500",
    fax: "(908) 469-1501",
    hours: {
      Monday: { open: "10:00", close: "14:00" },
      Tuesday: { open: "11:00", close: "15:00" },
      Wednesday: { open: "10:00", close: "14:00" },
      Thursday: { open: "10:00", close: "14:00" },
      Friday: { open: "10:00", close: "14:00" },
      Saturday: null,
      Sunday: null,
    },
    googleMapsUrl: "https://goo.gl/maps/pdFEzvXGiSboVDPk8",
  },
] as const;

export const PRIMARY_OFFICE = OFFICES[0]!;
