import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://6787c546c4a42c9161082bb5.mockapi.io' }),
  endpoints: (builder) => ({
    createReview: builder.mutation({
      query: () => ({
        url: `/images`,
        method: 'POST',
      }),
    }),
  }),
});

export const { useCreateReviewMutation } = apiSlice;
