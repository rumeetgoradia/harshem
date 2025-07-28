"use client";

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useAppointmentForm } from "../form-context";
import { Button } from "~/components/ui/button";

export function FinishStep() {
  const { state, dispatch } = useAppointmentForm();
  const { formData } = state;

  function handleReset() {
    dispatch({ type: "RESET" });
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <CheckCircle className="h-16 w-16 text-primary" />
      <div className="space-y-2">
        <h2 className="text-2xl font-bold">Appointment Request Sent!</h2>
        <p className="text-muted-foreground">
          Thank you for requesting an appointment. We will reach out to you
          shortly to confirm your appointment date and time.
        </p>
      </div>

      {/* Conditionally show this message if the user is a new patient */}
      {formData.newPatient && (
        <p className="text-muted-foreground">
          Since you are a new patient, please take a moment to download, print,
          and complete the first-time registration form, available on our{" "}
          <Link
            href="/forms"
            className="font-medium text-primary hover:underline"
          >
            patient forms page
          </Link>
          .
        </p>
      )}

      <Button onClick={handleReset} variant="outline" className="mt-4">
        Request Another Appointment
      </Button>
    </div>
  );
}