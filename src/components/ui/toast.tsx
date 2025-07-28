"use client";

import { toast as sonnerToast } from "sonner";
import { cva, type VariantProps } from "class-variance-authority";
import { AlertCircle, CheckCircle, X } from "lucide-react";

import { cn } from "~/lib/utils";

// Define the styles for the toast container using CVA
const toastVariants = cva(
  "flex w-full max-w-sm items-start gap-4 rounded-lg p-4 shadow-lg ring-1",
  {
    variants: {
      variant: {
        success: "bg-primary text-primary-foreground ring-brand-400",
        error: "bg-destructive text-destructive-foreground ring-destructive/50",
      },
    },
    defaultVariants: {
      variant: "success",
    },
  },
);

// Define the props for our component
interface CustomToastProps extends VariantProps<typeof toastVariants> {
  id: number | string;
  title: string;
  description?: string;
}

export function CustomToast({
  id,
  title,
  description,
  variant,
}: CustomToastProps) {
  const Icon = variant === "success" ? CheckCircle : AlertCircle;

  return (
    <div className={cn(toastVariants({ variant }))}>
      {/* Main content: icon, title, and description */}
      <div className="flex-1">
        {/* Header: Icon is in-line with the title */}
        <div className="flex items-center gap-2">
          <Icon className="h-5 w-5 shrink-0" />
          <p className="font-semibold">{title}</p>
        </div>
        {description && (
          <p className="mt-1 pl-7 text-sm opacity-80">{description}</p>
        )}
      </div>

      {/* Close Button */}
      <button
        type="button"
        onClick={() => sonnerToast.dismiss(id)}
        className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </button>
    </div>
  );
}

type ToastProps = {
  title: string;
  description?: string;
  variant: "success" | "error";
};

/**
 * Displays a custom toast notification.
 * @param {ToastProps} props - The properties for the toast.
 */
export function showToast({ title, description, variant }: ToastProps) {
  sonnerToast.custom((t) => (
    <CustomToast
      id={t}
      title={title}
      description={description}
      variant={variant}
    />
  ));
}