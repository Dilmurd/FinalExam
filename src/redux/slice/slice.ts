import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "apiSlice", 
  baseQuery: fetchBaseQuery({ baseUrl: "https://6790c4c4af8442fd7377a11d.mockapi.io" }), 
  tagTypes: ["Reviews", "OtherTag"], 
  endpoints: (builder) => ({
    getReviews: builder.query({
      query: () => "/comments",
      providesTags: ["Reviews"],
    }),
    createReview: builder.mutation({
      query: (review) => ({
        url: "/comments",
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
