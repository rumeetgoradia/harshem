"use client";

import { useFormContext } from "react-hook-form";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { APPOINTMENT_TYPES, OFFICES, PROVIDERS } from "~/lib/constants";
import { type AppointmentFormData } from "~/lib/validators/appointment";
import { useAppointmentForm } from "../form-context";
import { Button } from "~/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

export function Step2AppointmentDetails() {
  const form = useFormContext<AppointmentFormData>();
  const { dispatch } = useAppointmentForm();

  async function handleNext() {
    // Validate only the fields in this step
    const isValid = await form.trigger([
      "officePreference",
      "providerPreference",
      "appointmentType",
    ]);

    if (isValid) {
      dispatch({
        type: "UPDATE_FORM_DATA",
        payload: form.getValues(),
      });
      dispatch({ type: "NEXT_STEP" });
    }
  }

  function handleBack() {
    // Save current data and go back
    dispatch({
      type: "UPDATE_FORM_DATA",
      payload: form.getValues(),
    });
    dispatch({ type: "PREV_STEP" });
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Office Preference */}
        <FormField
          control={form.control}
          name="officePreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Office Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select an office" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {OFFICES.map((office) => (
                    <SelectItem key={office.title} value={office.title}>
                      {office.title}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Provider Preference */}
        <FormField
          control={form.control}
          name="providerPreference"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Provider Preference</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className='w-full'>
                    <SelectValue placeholder="Select a provider" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {PROVIDERS.map((provider) => (
                    <SelectItem key={provider.name} value={provider.name}>
                      {provider.name}
                    </SelectItem>
                  ))}
                  <SelectItem value="No Preference">No Preference</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Appointment Type */}
        <div className="md:col-span-2 lg:col-span-1">
          <FormField
            control={form.control}
            name="appointmentType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Appointment Type</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className='w-full'>
                      <SelectValue placeholder="Select a type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {APPOINTMENT_TYPES.map((type) => (
                      <SelectItem key={type} value={type}>
                        {type}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
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

  )
} 