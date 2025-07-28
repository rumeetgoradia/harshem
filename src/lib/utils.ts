import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
/**
 * Converts a 24-hour time string (e.g., "17:00") to a 12-hour format (e.g., "5:00 PM").
 * @param timeString The time in "HH:mm" format.
 * @returns The formatted 12-hour time string.
 */
export function formatTime(timeString: string): string {
  const [hours, minutes] = timeString.split(":").map(Number);
  if (hours === undefined || isNaN(hours) || minutes === undefined || isNaN(minutes)) return "Invalid Time";

  const ampm = hours >= 12 ? "PM" : "AM";
  const twelveHour = hours % 12 || 12; // Converts "0" and "12" to 12

  return `${twelveHour}:${minutes.toString().padStart(2, "0")} ${ampm}`;
}

export function formatDate(dateString: string): string {
  if (!dateString) return "";
  
  // Adding `\T00:00:00` ensures the date is parsed in the local timezone,
  // preventing off-by-one day errors that can occur with UTC parsing.
  const date = new Date(`${dateString}T00:00:00`);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}