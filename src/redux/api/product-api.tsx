import {api} from './index'

export const productApi = api.injectEndpoints({
  endpoints:(build) => ({
    getProducts: build.query({
      query: (params) => ({
        url: `/blog`,
        params
      }),
    }),
    getDetail: build.query({
      query: (id) => ({
        url: `/blog/${id}`,
      }),
    }),
    getDetailImg: build.query({
      query: (id) => ({
        url: `/blog/${id}/images`,
      }),
    }),
  }),
})


export const {
  useGetProductsQuery,
  useGetDetailQuery,
  useGetDetailImgQuery
} = productApi