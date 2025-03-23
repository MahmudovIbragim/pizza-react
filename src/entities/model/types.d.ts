namespace Product {
  type Data = {
    _id: number;
    price: number;
    title: string;
    basket: boolean;
    favorite: boolean;
    createdAt: string;
    updatedAt: string;
    productImg: string;
    description: string;
    productSize: string;
  };
  type GetProductResponse = {
    success: boolean;
    current_page: number;
    per_page: number;
    total_pages: number;
    total_items: number;
    data: Data[];
  };
  type GetProductRequest = void;
}
