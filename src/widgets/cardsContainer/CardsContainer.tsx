import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useProductIsFavoriteMutation,
} from "../../entities/api/product";
import CardProduct from "../../entities/ui/CardProduct";
import scss from "./CardsContainer.module.scss";
const CardsContainer = () => {
  const { data } = useGetProductsQuery();
  const [productIsFavorite] = useProductIsFavoriteMutation();
  const [deleteProduct] = useDeleteProductMutation();

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
  };

  const handleFavorite = async (id: number) => {
    const findData = data?.find((item) => item.id === id);
    if (!findData) return;

    await productIsFavorite({
      id,
      data: { ...findData, isFavorite: !findData?.isFavorite },
    });
  };
  return (
    <div className={scss.CardsContainer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.cards}>
            {data &&
              data.map((item) => (
                <>
                  <CardProduct
                    key={item.id}
                    item={item}
                    favoriteClick={() => handleFavorite(item.id)}
                    basketClick={() => {}}
                    deleteClick={() => handleDeleteProduct(item.id)}
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
