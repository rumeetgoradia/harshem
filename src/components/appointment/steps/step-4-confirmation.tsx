"use client";

import { useFormContext } from "react-hook-form";
import { ArrowLeft, Loader2 } from "lucide-react";

import { type AppointmentFormData } from "~/lib/validators/appointment";
import { useAppointmentForm } from "../form-context";
import { api } from "~/trpc/react";
import { showToast } from "~/components/ui/toast";
import { formatDate, formatTime } from "~/lib/utils";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Checkbox } from "~/components/ui/checkbox";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";

// Updated helper component to be more flexible
function ReviewDetail({
  label,
  value,
  className,
}: {
  label: string;
  value?: string | null;
  className?: string;
}) {
  if (!value) return null;
  return (
    <div className={className}>
      <p className="text-sm font-medium text-muted-foreground">{label}</p>
      <p className="text-base font-semibold">{value}</p>
    </div>
  );
}

export function Step4Confirmation() {
  const form = useFormContext<AppointmentFormData>();
  const { state, dispatch } = useAppointmentForm();
  const { formData } = state;

  const { mutate, isPending } = api.appointment.create.useMutation({
    onSuccess: () => {
      dispatch({ type: "NEXT_STEP" });
    },
    onError: (error) => {
      showToast({
        variant: "error",
        title: "Submission Failed",
        description: error.message,
      });
    },
  });

  async function handleFormSubmit() {
    const isValid = await form.trigger(["newPatient", "agreeToTerms"]);
    if (!isValid) return;

    const finalData = { ...state.formData, ...form.getValues() };
    mutate(finalData as AppointmentFormData);
  }

  function handleBack() {
    dispatch({ type: "UPDATE_FORM_DATA", payload: form.getValues() });
    dispatch({ type: "PREV_STEP" });
  }

  // Logic for dynamic date/time display
  const hasSecondPreference =
    formData.secondDatePreference && formData.secondTimePreference;

  return (
    <div className="space-y-6">
      {/* ====== Review Summary Section ====== */}
      <Card>
        <CardContent className="space-y-6 pt-6">
          {/* --- Updated Header --- */}
          <h2 className="text-xl font-semibold">
            Please review your information.
          </h2>
          
          {/* --- Patient Details --- */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-muted-foreground">
              Patient Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ReviewDetail label="First Name" value={formData.firstName} />
              <ReviewDetail label="Last Name" value={formData.lastName} />
              <ReviewDetail
                label="Date of Birth"
                value={formData.dateOfBirth}
              />
              <ReviewDetail label="Phone" value={formData.phone} />
              <ReviewDetail
                label="Email"
                value={formData.email}
                className="col-span-2"
              />
            </div>
          </div>

          <hr className="border-border" />

          {/* --- Appointment Details --- */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-muted-foreground">
              Appointment Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <ReviewDetail label="Office" value={formData.officePreference} />
              <ReviewDetail
                label="Provider"
                value={formData.providerPreference}
              />
              <ReviewDetail
                label="Appointment Type"
                value={formData.appointmentType}
                className="col-span-2"
              />
              
              {/* --- Consolidated and Dynamic Date/Time --- */}
              <ReviewDetail
                label={hasSecondPreference ? "1st Preference" : "Preferred Appointment Time"}
                value={
                  formData.firstDatePreference && formData.firstTimePreference
                    ? `${formatDate(formData.firstDatePreference)} at ${formatTime(formData.firstTimePreference)}`
                    : null
                }
                className="col-span-2"
              />
              <ReviewDetail
                label="2nd Preference"
                value={
                  hasSecondPreference
                    ? `${formatDate(formData.secondDatePreference!)} at ${formatTime(formData.secondTimePreference!)}`
                    : null
                }
                className="col-span-2"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ====== Confirmation Section ====== */}
      <div className="space-y-6 rounded-md border p-4">
        <FormField
          control={form.control}
          name="newPatient"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I am a new patient at Harshem Family Practice.
                </FormLabel>
              </div>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="agreeToTerms"
          render={({ field }) => (
            <FormItem className="flex flex-row items-start space-x-3 space-y-0">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel>
                  I agree to Harshem Family Practice&apos;s terms and conditions.
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
      </div>

      {/* ====== Navigation ====== */}
      <div className="flex justify-between pt-4">
        <Button type="button" variant="outline" onClick={handleBack} disabled={isPending}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button type="button" onClick={handleFormSubmit} disabled={isPending}>
          {isPending && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {isPending ? "Submitting..." : "Submit Appointment"}
        </Button>
      </div>
    </div>
  );
}