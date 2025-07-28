"use client";

import { useFormContext } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";

import { DAYS, OFFICES } from "~/lib/constants";
import { type AppointmentFormData } from "~/lib/validators/appointment";
import { useAppointmentForm } from "../form-context";
import { formatTime } from "~/lib/utils";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";

// Helper to get office hours for a given date
function getOfficeHours(officeName: string, dateStr: string) {
  if (!officeName || !dateStr) return null;
  const office = OFFICES.find((o) => o.title === officeName);
  if (!office) return null;
  const dayName = DAYS[new Date(dateStr).getUTCDay()]!;
  return office.hours[dayName];
}

export function Step3DateSelection() {
  const form = useFormContext<AppointmentFormData>();
  const { state, dispatch } = useAppointmentForm();
  const { formData } = state;

  const [firstDate, secondDate] = form.watch([
    "firstDatePreference",
    "secondDatePreference",
  ]);

  const officeName = formData.officePreference ?? "";
  const firstDateHours = getOfficeHours(officeName, firstDate ?? "");
  const secondDateHours = getOfficeHours(officeName, secondDate ?? "");

  async function handleNext() {
    const isValid = await form.trigger([
      "firstDatePreference",
      "firstTimePreference",
      "secondDatePreference",
      "secondTimePreference",
    ]);

    if (isValid) {
      dispatch({ type: "UPDATE_FORM_DATA", payload: form.getValues() });
      dispatch({ type: "NEXT_STEP" });
    }
  }

  function handleBack() {
    dispatch({ type: "UPDATE_FORM_DATA", payload: form.getValues() });
    dispatch({ type: "PREV_STEP" });
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 md:grid-cols-2">
        {/* --- First Preference --- */}
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="firstDatePreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Appointment Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="firstTimePreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preferred Appointment Time</FormLabel>
                <FormControl>
                  <Input type="time" disabled={!firstDateHours} {...field} />
                </FormControl>
                <p className="mt-2 text-xs text-muted-foreground">
                  {firstDateHours ? (
                    `The ${officeName} office is open from ${formatTime(
                      firstDateHours.open,
                    )} to ${formatTime(firstDateHours.close)}.`
                  ) : firstDate ? (
                    `The ${officeName} office is closed on this day.`
                  ) : (
                    <>
                      Select a date to see office hours, or view{" "}
                      <Link href="/offices" className="underline">
                        all office details
                      </Link>
                      .
                    </>
                  )}
                </p>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* --- Second Preference --- */}
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="secondDatePreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Appointment Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="secondTimePreference"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Secondary Appointment Time</FormLabel>
                <FormControl>
                  <Input type="time" disabled={!secondDateHours} {...field} />
                </FormControl>
                <p className="mt-2 text-xs text-muted-foreground">
                  {secondDateHours ? (
                    `The ${officeName} office is open from ${formatTime(
                      secondDateHours.open,
                    )} to ${formatTime(secondDateHours.close)}.`
                  ) : secondDate ? (
                    `The ${officeName} office is closed on this day.`
                  ) : (
                    "Please select a secondary date to see hours."
                  )}
                </p>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={handleBack}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button type="button" onClick={handleNext}>
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}