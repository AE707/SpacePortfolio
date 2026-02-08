"use client";
import { cn } from "@/utils/utils";
import type { HTMLMotionProps } from "framer-motion";
import { motion } from "framer-motion";
import React, { forwardRef } from "react";
type ButtonState = "idle" | "loading" | "success" | "error";
type ButtonVariant = "primary" | "whatsapp";

    interface StatefulButtonProps extends Omit<HTMLMotionProps<"button">, "onAnimationStart"> {
    state?: ButtonState;
    variant?: ButtonVariant;
    idleText?: string;
    loadingText?: string;
    successText?: string;
    errorText?: string;
    icon?: React.ReactNode;
    successIcon?: React.ReactNode;
    errorIcon?: React.ReactNode;
    className?: string;
}
/*interface StatefulButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  state?: ButtonState;
  idleText?: string;
  loadingText?: string;
  successText?: string;
  errorText?: string;
  icon?: React.ReactNode;
  successIcon?: React.ReactNode;
  errorIcon?: React.ReactNode;
}*/

export const StatefulButton = forwardRef<HTMLButtonElement, StatefulButtonProps>(
  (
    {
      state = "idle",
      idleText = "Submit",
      loadingText = "Loading...",
      successText = "Success!",
      errorText = "Error",
      icon,
      successIcon = "✓",
      errorIcon = "✕",
      className,
      ...props
    },
    ref
  ) => {
    const getButtonContent = () => {
      switch (state) {
        case "loading":
          return (
            <div className="flex items-center gap-2">
              <svg
                className="animate-spin h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
              </svg>
              {loadingText}
            </div>
          );
        case "success":
          return (
            <div className="flex items-center gap-2">
              <span className="text-lg">{successIcon}</span>
              {successText}
            </div>
          );
        case "error":
          return (
            <div className="flex items-center gap-2">
              <span className="text-lg">{errorIcon}</span>
              {errorText}
            </div>
          );
        default:
          return (
            <div className="flex items-center gap-2">
              {icon}
              {idleText}
            </div>
          );
      }
    };

    const getButtonColor = () => {
      switch (state) {
        case "loading":
          return "bg-gradient-to-r from-purple-500 to-cyan-500 opacity-80";
        case "success":
          return "bg-gradient-to-r from-green-500 to-emerald-500";
        case "error":
          return "bg-gradient-to-r from-red-500 to-rose-500";
        default:
          return "bg-gradient-to-r from-purple-500 to-cyan-500 hover:opacity-90";
      }
    };

    return (
      <motion.button
        ref={ref}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "w-full py-3 rounded-lg text-white font-semibold transition-all disabled:cursor-not-allowed relative overflow-hidden",
          getButtonColor(),
          className
        )}
        disabled={state === "loading" || state === "success"}
        {...props}
      >
        <motion.span
          key={state}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="flex items-center justify-center"
        >
          {getButtonContent()}
        </motion.span>
      </motion.button>
    );
  }
);

StatefulButton.displayName = "StatefulButton";
