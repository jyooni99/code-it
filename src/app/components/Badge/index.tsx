import clsx from "clsx";
import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "success" | "warning" | "danger" | "info";
  size?: "xs" | "sm" | "md";
  outlined?: boolean;
  rounded?: boolean;
  withDot?: boolean;
  className?: string;
}

function Badge({
  children,
  variant = "primary",
  size = "sm",
  outlined,
  rounded,
  withDot,
  className,
}: BadgeProps) {
  const BadgeClasses = clsx(
    // 기본 스타일
    "inline-flex items-center font-medium",

    // 뱃지 사이즈
    {
      "text-xs px-1.5 py-0.5": size === "xs",
      "text-sm px-2.5 py-0.5": size === "sm",
      "text-md px-3 py-1": size === "md",
    },

    // 모서리 설정
    {
      "rounded-full": rounded,
      rounded: !rounded,
    },

    // 테마 설정
    {
      // 기본 스타일
      "bg-blue-600 text-white": variant === "primary" && !outlined,
      "bg-green-100 text-green-800": variant === "success" && !outlined,
      "bg-yellow-500": variant === "warning" && !outlined,
      "bg-red-200 text-red-800": variant === "danger" && !outlined,
      "bg-blue-100 text-blue-800": variant === "info" && !outlined,

      // 아웃라인 스타일
      "bg-transparent border": outlined,
      "border-blue-500 text-blue-500": variant === "primary" && outlined,
      "border-green-500 text-green-500": variant === "success" && outlined,
      "border-yellow-500 text-yellow-500": variant === "warning" && outlined,
      "border-red-500 text-red-500": variant === "danger" && outlined,
      "border-blue-800 text-blue-800": variant === "info" && outlined,
    },

    className,
  );

  // variants info일 때, 점의 색상
  const dotColorClasses = clsx("mr-1.5 h-2 w-2 rounded-full", {
    "bg-blue-500": variant === "primary",
    "bg-green-500": variant === "success",
    "bg-yellow-500": variant === "warning",
    "bg-red-500": variant === "danger",
    "bg-blue-400": variant === "info",
  });

  return (
    <div className={BadgeClasses}>
      {withDot && <span className={dotColorClasses} />}
      {children}
    </div>
  );
}

export default Badge;
