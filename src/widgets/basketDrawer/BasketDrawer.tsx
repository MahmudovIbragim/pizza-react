import { FC } from "react";
import CustomDrawer from "../../shared/ui/drawer/CustomDrawer";
import scss from "./BasketDrawer.module.scss";
import { MinusIcon, Plus, X } from "lucide-react";
import Button from "../../shared/ui/button/Button";
import {
  useGetProductsQuery,
  useProductIsBasketMutation,
} from "../../entities/api/product";

interface TypeProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const BasketDrawer: FC<TypeProps> = ({ isOpen, setIsOpen }) => {
  const { data } = useGetProductsQuery();
  const [productIsBasket] = useProductIsBasketMutation();

  const productQuantityMax = async (id: number) => {
    const findData = data?.find((item) => item.id === id);
    if (!findData) return;
    await productIsBasket({
      id,
      data: { ...findData, quantity: findData?.quantity + 1 },
    });
  };

  const productQuantityMin = async (id: number) => {
    const findData = data?.find((item) => item.id === id);
    if (!findData) return;
    if (findData.quantity === 1) {
      await productIsBasket({
        id,
        data: { ...findData, isBasket: false },
      });
    } else {
      await productIsBasket({
        id,
        data: { ...findData, quantity: findData?.quantity - 1 },
      });
    }
  };

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
            <button onClick={toggleDrawer}>
              <X color="#999999" size={28} />
            </button>
          </div>
          <div className={scss.products}>
            {data &&
              data
                .filter((prod) => prod.isBasket === true)
                .map((item) => (
                  <div key={item.id} className={scss.product}>
                    <img src={item.productImg} alt="" />
                    <div className={scss.product_info}>
                      <h3>{item.title}</h3>
                      <p>{item.productSize}</p>
                      <span></span>
                      <div className={scss.product_footer}>
                        <div className={scss.btns}>
                          <Button
                            className={scss.button}
                            onClick={() => productQuantityMin(item.id)}
                            orangeTheme={false}
                          >
                            <MinusIcon size={16} />
                          </Button>
                          <h3>{item.quantity}</h3>
                          <Button
                            className={scss.button}
                            onClick={() => productQuantityMax(item.id)}
                            orangeTheme={false}
                          >
                            <Plus size={16} />
                          </Button>
                        </div>
                        <div className={scss.product_price}>
                          <p>{item.price} ₽ </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
          </div>
        </div>
      </CustomDrawer>
    </>
  );
};

export default BasketDrawer;
