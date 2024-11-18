import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produtos } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://fake-api-tau.vercel.app/api/ebac_sports'
  }),
  endpoints: (builder) => ({
    getProdutos: builder.query<Produtos[], void>({
      query: () => 'produtos'
    })
  })
})

export const { useGetProdutosQuery } = api

export default api
