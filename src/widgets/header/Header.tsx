import scss from "./Header.module.scss";
import pizzaLogo from "../../shared/assets/images/logo.png";
import Search from "../search/Search";
import Button from "../../shared/ui/button/Button";
import {  ShoppingCart } from "lucide-react";
import { useState } from "react";
import DropDown from "../../shared/ui/dropdown/DropDown";
import BasketDrawer from "../basketDrawer/BasketDrawer";

const Header = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logo}>
            <img src={pizzaLogo} alt="logo" />
            <div className={scss.logo_content}>
              <h2>PIZZA</h2>
              <p>вкусней уже некуда</p>
            </div>
          </div>
          <div className={scss.search_content}>
            <Search />
          </div>
          <div className={scss.btns}>
            <DropDown openDrop={openDrop} setOpenDrop={setOpenDrop} />
            <Button
              orangeTheme={true}
              onClick={() => {
                setIsOpen((prevState) => !prevState);
              }}
            >
              <ShoppingCart />
            </Button>
            <BasketDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
