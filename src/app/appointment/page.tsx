"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    type AppointmentFormData,
    appointmentFormSchema,
} from "~/lib/validators/appointment";

import { AppointmentFormProvider } from "~/components/appointment/form-context";
import { AppointmentFormWrapper } from "~/components/appointment/form-wrapper";
import { Form } from "~/components/ui/form";

export default function AppointmentPage() {
    const form = useForm<AppointmentFormData>({
        // @ts-expect-error - A known issue where TypeScript struggles to reconcile the complex
        // Zod schema type with the react-hook-form Resolver type. The runtime behavior is correct.
        resolver: zodResolver(appointmentFormSchema),

        defaultValues: {
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            phone: "",
            email: "",
            officePreference: undefined,
            providerPreference: undefined,
            appointmentType: undefined,
            firstDatePreference: undefined,
            firstTimePreference: undefined,
            secondDatePreference: undefined,
            secondTimePreference: undefined,
            newPatient: false,
            agreeToTerms: false,
        },
    });

    return (
        <div className="flex justify-center">
            <div className="container max-w-[64rem] space-y-8 px-8 py-16">
                <div className="space-y-4">
                    <h1 className="text-4xl font-bold tracking-tight">
                        Book an Appointment
                    </h1>
                    <p className="text-muted-foreground">
                        For medical emergencies, please call 911 immediately. This form is
                        for non-urgent appointments only.
                    </p>
                </div>

                <AppointmentFormProvider>
                    <Form {...form}>
                        <form onSubmit={(e) => e.preventDefault()} className="w-full">
                            <AppointmentFormWrapper />
                        </form>
                    </Form>
                </AppointmentFormProvider>
            </div>
        </div>
    );
}