"use client";

import { useFormContext } from "react-hook-form";
import { ArrowRight } from "lucide-react";

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
import { Input } from "~/components/ui/input";

export function Step1PatientInfo() {
  const form = useFormContext<AppointmentFormData>();
  const { dispatch } = useAppointmentForm();

  async function handleNext() {
    // Validate only the fields relevant to this step
    const isValid = await form.trigger([
      "firstName",
      "lastName",
      "dateOfBirth",
      "phone",
      "email",
    ]);

    if (isValid) {
      dispatch({
        type: "UPDATE_FORM_DATA",
        payload: form.getValues(),
      });
      dispatch({ type: "NEXT_STEP" });
    }
  }

  return (
    <div className="space-y-6">
      {/* 
        We'll use a CSS Grid for precise control over the layout,
        matching the screenshot.
      */}
      <div className="grid grid-cols-1 gap-x-6 gap-y-6 md:grid-cols-2">
        {/* First Name */}
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="John" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Last Name */}
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Date of Birth */}
        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date of Birth</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Phone Number */}
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone Number</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(555) 123-4567" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      {/* Navigation */}
      <div className="flex justify-end pt-4">
        <Button type="button" onClick={handleNext}>
          Next
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}