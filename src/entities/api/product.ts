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
  }),
});

export const { useGetProductsQuery } = api;
