import scss from "./Header.module.scss";
import pizzaLogo from "../../shared/assets/images/logo.png";
import Search from "../search/Search";
import Button from "../../shared/ui/button/Button";
import { ShoppingCart, User } from "lucide-react";

const Header = () => {
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
            <Button orangeTheme={false}>
              <User size={20} />
              <p>Профиль</p>
            </Button>
            <Button orangeTheme={true}>
              <ShoppingCart />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
