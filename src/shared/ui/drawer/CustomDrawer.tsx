import { FC, ReactNode } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

interface TypeProps {
  children: ReactNode;
  openDrop: boolean;
  direction: "left" | "right" | "top" | "bottom";
  onClose: () => void;
  className?: string;
}

const CustomDrawer: FC<TypeProps> = ({
  children,
  className,
  direction,
  onClose,
  openDrop,
}) => {
  return (
    <Drawer
      open={openDrop}
      onClose={onClose}
      direction={direction}
      className={className}
    >
      {children}
    </Drawer>
  );
};

export default CustomDrawer;
