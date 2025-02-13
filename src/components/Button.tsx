import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  variant?: string;
}

function Button(props: ButtonProps) {
  const { className, variant, children } = props;

  return (
    <button
      className={clsx(
        "inline-block w-auto btn-primary rounded-full py-2 px-4 text-center",
        {
          "btn-primary": variant === "primary",
          "btn-secondary": variant === "secondary",
          "btn-success": variant === "success",
          "btn-warning": variant === "warning",
          "btn-danger": variant === "danger",
          "btn-outline-primary": variant === "outline-primary",
          "btn-outline-secondary": variant === "outline-secondary",
          "btn-outline-success": variant === "outline-success",
          "btn-outline-warning": variant === "outline-warning",
          "btn-outline-danger": variant === "outline-danger",
        },
        className
      )}
    >
      {children}
      <div className="card-body"></div>
    </button>
  );
}

export default Button;
