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
  type GetProductResponse = {
    id: number;
    price: number;
    title: string;
    isBasket: boolean;
    isFavorite: boolean;
    productImg: string;
    description: string;
    productSize: string;
    quantity: number;
  }[];
  type GetProductRequest = void;

  type ProductIsFavoriteResponse = {
    id: number;
    price: number;
    title: string;
    isBasket: boolean;
    avorite: boolean;
    productImg: string;
    description: string;
    productSize: string;
    quantity: number;
  };

  type ProductIsFavoriteRequest = {
    id: number;
    data: {
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
  };

  type DeleteProductResponse = void;
  type DeleteProductRequest = number;
}
