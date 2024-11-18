import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produtos } from '../../App'

type CarrinhoState = {
  itens: Produtos[]
}

const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produtos>) => {
      const produto = action.payload

      if (state.itens.find((produto) => produto.id === produto.id)) {
        alert('Item ja adicionado')
      } else {
        state.itens.push(produto)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
