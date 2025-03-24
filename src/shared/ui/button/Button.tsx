import { FC, ReactNode } from "react";
import scss from "./Button.module.scss";

interface TypeProps {
  children: ReactNode;
  onClick?: () => void;
  orangeTheme: boolean;
  disable?:boolean
}
const Button: FC<TypeProps> = ({ children, onClick, orangeTheme,disable }) => {
  return (
    <button
      onClick={onClick}
      disabled={disable}
      className={`${scss.Button} ${orangeTheme ? scss.ButtonOrange : ""}`}
    >
      {children}
    </button>
  );
};

export default Button;
