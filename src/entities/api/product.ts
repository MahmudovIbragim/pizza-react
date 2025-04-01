import { api as index } from "../../shared/api/index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    GetProducts: build.query<
      Product.GetProductResponse,
      Product.GetProductRequest
    >({
      query: () => ({
        url: "/product",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    ProductIsFavorite: build.mutation<
      Product.ProductIsResponse,
      Product.ProductIsRequest
    >({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    ProductIsBasket: build.mutation<
      Product.ProductIsResponse,
      Product.ProductIsRequest
    >({
      query: ({ id, data }) => ({
        url: `/product/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
    DeleteProduct: build.mutation<
      Product.DeleteProductResponse,
      Product.DeleteProductRequest
    >({
      query: (id) => ({
        url: `/product/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useProductIsFavoriteMutation,
  useDeleteProductMutation,
  useProductIsBasketMutation,
} = api;

