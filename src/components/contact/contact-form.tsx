"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { type ContactFormData, contactFormSchema } from "~/lib/validators/contact";
import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/components/ui/form";
import { Input } from "~/components/ui/input";
import { Textarea } from "~/components/ui/textarea";

export function ContactForm() {
//   TODO fix color of toast
  const { mutate, isPending } = api.contact.send.useMutation({
    onSuccess: () => {
      toast.success("Message sent successfully!", {
        description: "Thanks for your message! We will get back to you shortly.",
      });
      form.reset();
    },
    onError: (error) => {
      toast.error("Something went wrong.", {
        description:
          error.message ?? "Please try again later or give us a call.",
      });
    },
  });

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      url: "", // Honeypot field
    },
  });

  function onSubmit(values: ContactFormData) {
    mutate(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
        noValidate
      >
        <input type="hidden" {...form.register("url")} />

        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

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

        <div className="md:col-span-2">
          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Please type your message here."
                    rows={8}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="md:col-span-2">
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </Form>
  );
}