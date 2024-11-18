import { useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store/'

export type Produtos = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [favoritos, setFavoritos] = useState<Produtos[]>([])

  function favoritar(produto: Produtos) {
    if (favoritos.find((p) => p.id === produto.id)) {
      const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
      setFavoritos(favoritosSemProduto)
    } else {
      setFavoritos([...favoritos, produto])
    }
  }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos favoritar={favoritar} />
      </div>
    </Provider>
  )
}

export default App
