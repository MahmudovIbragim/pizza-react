import scss from "./Header.module.scss";
import pizzaLogo from "../../shared/assets/images/logo.png";
import Search from "../search/Search";
import Button from "../../shared/ui/button/Button";
import { Home, ShoppingCart, User } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [openDrop, setOpenDrop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
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
            <div className={scss.dropdown}>
              <Button
                orangeTheme={false}
                onClick={() => setOpenDrop(!openDrop)}
              >
                <User size={20} />

                <p> Страницы</p>
              </Button>
              <div
                className={`${scss.drop_content} ${
                  openDrop && scss.open_drop_content
                }`}
              >
                <button
                  onClick={() => {
                    navigate("/favorite");
                    setOpenDrop(false);
                  }}
                  disabled={openDrop ? false : true}
                >
                  Нравится
                </button>
                <button
                  onClick={() => {
                    navigate("/add-card");
                    setOpenDrop(false);
                  }}
                  disabled={openDrop ? false : true}
                >
                  Создать
                </button>
              </div>
            </div>
            <Button
              orangeTheme={true}
              onClick={() => {
                if (location.pathname !== "/basket") {
                  navigate("/basket");
                } else {
                  navigate("/");
                }
              }}
            >
              {location.pathname === "/basket" ? <Home /> : <ShoppingCart />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
