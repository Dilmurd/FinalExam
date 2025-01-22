import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice", 
  baseQuery: fetchBaseQuery({ baseUrl: "https://6787c546c4a42c9161082bb5.mockapi.io" }), 
  tagTypes: ["Reviews", "OtherTag"], 
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/images",
      providesTags: ["Reviews"],
    }),
    createReview: builder.mutation({
      query: (review) => ({
        url: "/images",
        method: "POST",
        body: review,
      }),
      invalidatesTags: ["Reviews"],
    }),
    getOtherData: builder.query({
      query: () => "/other-data",
      providesTags: ["OtherTag"],
    }),
  }),
});

export const {
  useGetReviewsQuery,
  useCreateReviewMutation,
  useGetOtherDataQuery,
} = apiSlice;
