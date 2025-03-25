import { Heart, MinusIcon, Plus } from "lucide-react";
import scss from "./CardProduct.module.scss";
import { FC } from "react";
import Button from "../../shared/ui/button/Button";

interface TypeProps {
  item: Product.Data;
  favoriteClick: () => void;
  basketClick: () => void;
  deleteClick: () => void;
}
const CardProduct: FC<TypeProps> = ({
  item,
  favoriteClick,
  basketClick,
  deleteClick,
}) => {
  return (
    <div className={scss.CardProduct}>
      <div className={scss.card_image}>
        <img src={item.productImg} alt="" />
        <button className={scss.icon} onClick={favoriteClick}>
          {item.isFavorite ? (
            <Heart color="red" fill="red" strokeWidth={2} size={26} />
          ) : (
            <Heart color="red" strokeWidth={2} size={26} />
          )}
        </button>
      </div>
      <div className={scss.card_info}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className={scss.card_btns}>
        <Button
          className={scss.delete_btn}
          orangeTheme={true}
          onClick={deleteClick}
        >
          Удалить
        </Button>
        <div className={scss.add_to_basket}>
          {item.isBasket ? (
            <>
              <div className={scss.quantity_product}>
                <Button orangeTheme={false}>
                  <MinusIcon size={18} />
                </Button>
                <h3>{item.quantity}</h3>
                <Button orangeTheme={false}>
                  <Plus size={18} />
                </Button>
              </div>
            </>
          ) : (
            <Button
              className={scss.add_btn}
              onClick={basketClick}
              orangeTheme={false}
            >
              <Plus />
              Добавть
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
