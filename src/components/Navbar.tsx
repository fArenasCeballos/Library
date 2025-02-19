import { ReactNode } from "react";
import clsx from "clsx";

interface AlertProps {
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof variants;
}

const variants = {
  primary: "alert-primary",
  secondary: "alert-secondary",
  success: "alert-success",
  warning: "alert-warning",
  danger: "alert-danger",
};

function Alert({ className, variant = "primary", children }: AlertProps) {
  return (
    <div
      className={clsx(
        "relative flex w-auto rounded-lg py-4 px-4 mb-4 text-center",
        variants[variant],
        className
      )}
    >
      {children}
    </div>
  );
}

export default Alert;
