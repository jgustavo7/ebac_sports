import { Produtos as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  favorito: ProdutoType[]
  favoritar: (produtos: ProdutoType) => void
}

const ProdutosComponent = ({ favorito, favoritar }: Props) => {
  const { data: produtos, isLoading } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favorito.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produtos) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produtos)}
            key={produtos.id}
            produto={produtos}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
