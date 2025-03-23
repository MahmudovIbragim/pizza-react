import { Heart, Plus } from "lucide-react";
import scss from "./CardProduct.module.scss";
import { FC } from "react";
import Button from "../../shared/ui/button/Button";

interface TypeProps {
  item: Product.Data;
  handleClick: () => void;
}
const CardProduct: FC<TypeProps> = ({ item, handleClick }) => {
  return (
    <div className={scss.CardProduct}>
      <div className={scss.card_image}>
        <img src={item.productImg} alt="" />
        <button className={scss.icon} onClick={handleClick}>
          <Heart color="red" strokeWidth={2} size={26} />
        </button>
      </div>
      <div className={scss.card_info}>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
      <div className={scss.card_btns}>
        <p>{item.price} ₽</p>
        <div className={scss.add_to_basket}>
          <Button orangeTheme={false}>
            <Plus />
            Добавть
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CardProduct;
