import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";

interface TypeProps {
  children: ReactNode;
  onClick?: () => void;
  orangeTheme: boolean;
}
const Button: FC<TypeProps> = ({ children, onClick, orangeTheme }) => {
  return (
    <button
      onClick={onClick}
      className={`${scss.Button} ${orangeTheme ? scss.ButtonOrange : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
