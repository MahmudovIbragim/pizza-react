import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";

interface TypeProps {
  children: ReactNode;
  onClick?: () => void;
  orangeTheme: boolean;
  disable?: boolean;
  className?: string;
}
const Button: FC<TypeProps> = ({
  children,
  onClick,
  orangeTheme,
  disable,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`${scss.Button} ${className} ${
        orangeTheme ? scss.ButtonOrange : ""
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
