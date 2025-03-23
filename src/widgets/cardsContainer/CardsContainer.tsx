import { useGetProductsQuery } from "../../entities/api/product";
import CardProduct from "../../entities/ui/CardProduct";
import scss from "./CardsContainer.module.scss";
const CardsContainer = () => {
  const { data } = useGetProductsQuery();
  return (
    <div className={scss.CardsContainer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {data &&
              data.data.map((item) => (
                <>
                  <CardProduct key={item._id}  item={item}/>
                  <CardProduct key={item._id}  item={item}/>
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
