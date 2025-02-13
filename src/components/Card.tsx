import { ReactNode } from "react";
import clsx from "clsx";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

function Card(props: CardProps) {
  const { className, children } = props;
  return (
    <div
      className={clsx(
        "relative flex flex-col w-auto min-h-2 rounded-lg border-2 border-gray-200",
        className
      )}
    >
      <div className="card-body flex-auto p-4">{children}</div>
    </div>
  );
}

interface CardBodyProps {
  title: string;
  text?: string;
}

export function CardBody(props: CardBodyProps) {
  const { title, text } = props;
  return (
    <>
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </>
  );
}

export default Card;
