import {
  useDeleteProductMutation,
  useGetProductsQuery,
  useProductIsBasketMutation,
  useProductIsFavoriteMutation,
} from "../../entities/api/product";
import CardProduct from "../../entities/ui/CardProduct";
import scss from "./CardsContainer.module.scss";

interface TypeProps {
  filter: boolean;
}

const CardsContainer = ({ filter }: TypeProps) => {
  const { data } = useGetProductsQuery();
  const [productIsFavorite] = useProductIsFavoriteMutation();
  const [deleteProduct] = useDeleteProductMutation();
  const [productIsBasket] = useProductIsBasketMutation();

  const handleDeleteProduct = async (id: number) => {
    await deleteProduct(id);
  };

  const handleAddFavorite = async (id: number) => {
    const findData = data?.find((item) => item.id === id);
    if (!findData) return;

    await productIsFavorite({
      id,
      data: { ...findData, isFavorite: !findData?.isFavorite },
    });
  };

  const handleAddBasket = async (id: number) => {
    const findData = data?.find((item) => item.id === id);
    if (!findData) return;
    await productIsBasket({
      id,
      data: { ...findData, isBasket: !findData?.isBasket },
    });
  };

  const handleMaxQuantity = async (id: number) => {
    const findData = data?.find((item) => item.id === id);
    if (!findData) return;
    await productIsBasket({
      id,
      data: { ...findData, quantity: findData?.quantity + 1 },
    });
  };

  const handleMinQuantity = async (id: number) => {
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
  return (
    <div className={scss.CardsContainer}>
      <div className={scss.content}>
        <div className={scss.cards}>
          {data && filter
            ? data
                .filter((el) => el.isFavorite === true)
                .map((item) => (
                  <>
                    <CardProduct
                      key={item.id}
                      item={item}
                      favoriteClick={() => handleAddFavorite(item.id)}
                      basketClick={() => {
                        handleAddBasket(item.id);
                      }}
                      quantityMax={() => handleMaxQuantity(item.id)}
                      quantityMin={() => handleMinQuantity(item.id)}
                      deleteClick={() => handleDeleteProduct(item.id)}
                    />
                  </>
                ))
            : data?.map((item) => (
                <>
                  <CardProduct
                    key={item.id}
                    item={item}
                    favoriteClick={() => handleAddFavorite(item.id)}
                    basketClick={() => {
                      handleAddBasket(item.id);
                    }}
                    quantityMax={() => handleMaxQuantity(item.id)}
                    quantityMin={() => handleMinQuantity(item.id)}
                    deleteClick={() => handleDeleteProduct(item.id)}
                  />
                </>
              ))}
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
