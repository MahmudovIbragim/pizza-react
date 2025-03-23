import { api as index } from "../../shared/api/index";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    GetProducts: build.query<
      Product.GetProductResponse,
      Product.GetProductRequest
    >({
      query: () => ({
        url: "/pizza",
        method: "GET",
      }),
      providesTags: ["product"],
    }),
    ProductIsFavorite: build.mutation<
      Product.ProductIsFavoriteResponse,
      Product.ProductIsFavoriteRequest
    >({
      query: ({ id, data }) => ({
        url: `/pizza/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["product"],
    }),
  }),
});

export const { useGetProductsQuery, useProductIsFavoriteMutation } = api;
