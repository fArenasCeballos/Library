import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  variant?: keyof typeof variants;
}

const variants = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  success: "btn-success",
  warning: "btn-warning",
  danger: "btn-danger",
  "outline-primary": "btn-outline-primary",
  "outline-secondary": "btn-outline-secondary",
  "outline-success": "btn-outline-success",
  "outline-warning": "btn-outline-warning",
  "outline-danger": "btn-outline-danger",
};

function Button({ className, variant = "primary", children }: ButtonProps) {
  return (
    <button
      className={clsx(
        "inline-block w-auto btn-primary rounded-full py-2 px-4 text-center",
        variants[variant],
        className
      )}
    >
      {children}
      <div className="card-body"></div>
    </button>
  );
}

export default Button;
