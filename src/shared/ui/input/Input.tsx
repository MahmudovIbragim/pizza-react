import { FC } from "react";
import scss from "./Input.module.scss";

interface TypeProps {
  type?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: FC<TypeProps> = ({ type, onChange, placeholder, value }) => {
  return (
    <input
      className={scss.Input}
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      
    />
  );
};

export default Input;
