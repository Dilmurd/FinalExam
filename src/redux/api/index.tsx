import { BaseQueryApi, createApi, FetchArgs, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'


const baseQuery = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: {}) => {
  const rawBaseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("x-auth-token")
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  });

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    const { status } = result.error;
    if (status === 401 || status === 403) {
      console.error('Unauthorized access - Redirecting to login...');
    }
  }
  return result;
};
const baseQueryWithRetry = retry(baseQuery, { maxRetries: 0 })

export const api = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithRetry,
  tagTypes: ["User", "Product", "Category"], 
  endpoints: () => ({}),
})