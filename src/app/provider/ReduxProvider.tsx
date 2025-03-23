import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

interface TypeProps {
  children: ReactNode;
}
const ReduxProvider: React.FC<TypeProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
