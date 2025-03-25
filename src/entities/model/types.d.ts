namespace Product {
  type Data = {
    id: number;
    price: number;
    title: string;
    isBasket: boolean;
    isFavorite: boolean;
    productImg: string;
    description: string;
    productSize: string;
    quantity: number;
  };
  type GetProductResponse = Data[];
  type GetProductRequest = void;

  type ProductIsResponse = Data;

  type ProductIsRequest = {
    id: number;
    data: Data;
  };

  type DeleteProductResponse = void;
  type DeleteProductRequest = number;
}
