import clsx from "clsx";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  radius?: "none" | "sm" | "md" | "lg" | "full";
  className?: string;
}

function Card({ children, variant, padding, radius, className }: CardProps) {
  const cardClasses = clsx(
    "overflow-hidden transition-all",
    {
      "p-0": padding === "none",
      "p-3": padding === "sm",
      "p-5": padding === "md",
      "p-8": padding === "lg",
    },
    {
      "rounded-none": radius === "none",
      "rounded-sm": radius === "sm",
      "rounded-md": radius === "md",
      "rounded-lg": radius === "lg",
      "rounded-full": radius === "full",
    },
    {
      "bg-white border border-gray-200": variant === "default",
      "bg-white border border-gray-500 hover:border-blue-500":
        variant === "outlined",
      "bg-white shadow-md hover:shadow-lg": variant === "elevated",
    },
    className,
  );

  return <div className={cardClasses}>{children}</div>;
}

export default Card;
