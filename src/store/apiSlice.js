import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURI = process.env.REACT_APP_API_URL;

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURI }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "/api/categories",
      providesTags: ["categories"],
    }),
    getTransaction: builder.query({
      query: () => "/api/transaction",
      providesTags: ["transaction"],
    }),
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags: ["transaction"],
    }),
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: `/api/transaction/${recordId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["transaction"],
    }),
  }),
});

export default apiSlice;
