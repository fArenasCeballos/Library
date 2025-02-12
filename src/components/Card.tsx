import { ReactNode } from "react";

interface CardProps {
  className?: string;
  children?: ReactNode;
}

function Card(props: CardProps) {
  const { className, children } = props;
  return (
    <div
      className={`inline-block min-w-[350px] w-auto min-h-2 p-4 rounded-lg border-2 border-gray-200 ${className}`}
    >
      <div className="card-body">{children}</div>
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
