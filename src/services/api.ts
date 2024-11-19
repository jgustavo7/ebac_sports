import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { Produto } from '../App'

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://localhost:3000/'
  }),
  endpoints: (builder) => ({
    getJogos: builder.query<Produto[], void>({
      query: () => 'Produto'
    })
  })
})

export const { useGetJogosQuery } = api

export default api
