/**
 * A constant array of day names.
 * Using `as const` allows us to derive a strict string literal type `Day`.
 */
export const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;

/**
 * A type representing a day of the week, derived from the DAYS array.
 * e.g., "Monday" | "Tuesday" | ...
 */
export type Day = (typeof DAYS)[number];
