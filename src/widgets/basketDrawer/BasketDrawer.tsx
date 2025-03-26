import { FC } from "react";
import CustomDrawer from "../../shared/ui/drawer/CustomDrawer";
import scss from "./BasketDrawer.module.scss";
import { MinusIcon, Plus, X } from "lucide-react";
import Button from "../../shared/ui/button/Button";

interface TypeProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  item: Product.Data;
}

const BasketDrawer: FC<TypeProps> = ({ isOpen, setIsOpen }) => {
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <CustomDrawer
        direction="right"
        onClose={toggleDrawer}
        className={scss.drawer}
        openDrop={isOpen}
      >
        <div className={scss.Drawer_content}>
          <div className={scss.title_drawer}>
            <h2>
              <span>В корзине</span>3 товара
            </h2>
            <button>
              <X color="#999999" size={28} />
            </button>
          </div>
          <div className={scss.products}>
            <div className={scss.product}>
              <img src="" alt="" />
              <div className={scss.product_info}>
                <h3></h3>
                <p></p>
                <span></span>
                <div className={scss.product_footer}>
                  <div className={scss.btn}>
                    {/* <Button onClick={quantityMin} orangeTheme={false}>
                      <MinusIcon size={18} />
                    </Button>
                    <h3>{item.quantity}</h3>
                    <Button onClick={quantityMax} orangeTheme={false}>
                      <Plus size={18} />
                    </Button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CustomDrawer>
    </>
  );
};

export default BasketDrawer;
