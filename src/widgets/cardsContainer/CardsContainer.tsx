import {
  useGetProductsQuery,
  useProductIsFavoriteMutation,
} from "../../entities/api/product";
import CardProduct from "../../entities/ui/CardProduct";
import scss from "./CardsContainer.module.scss";
const CardsContainer = () => {
  const { data } = useGetProductsQuery();
  const [productIsFavorite] = useProductIsFavoriteMutation();

  const handleFavorite = async (id: number) => {
    console.log(id);

    await productIsFavorite({ id, data: { favorite: true } });
  };
  return (
    <div className={scss.CardsContainer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {data &&
              data.data.map((item) => (
                <>
                  <CardProduct
                    key={item._id}
                    item={item}
                    handleClick={() => handleFavorite(item._id)}
                  />
                </>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
