import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  className?: string;
  children?: ReactNode;
  variant?: string;
}

function Button(props: ButtonProps) {
  const { className, variant = "primary", children } = props;

  return (
    <button
      className={clsx(
        `inline-block w-auto py-2 px-3 rounded-lg btn-${variant}`,
        className
      )}
    >
      {children}
      <div className="card-body"></div>
    </button>
  );
}

export default Button;
