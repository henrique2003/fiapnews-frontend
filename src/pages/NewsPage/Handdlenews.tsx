import React from 'react'
import { Redirect } from 'react-router-dom'
import { NewsPageItem } from '../../components'
import { LolPosts } from '../../assets'

interface Props {
  newsId: string
}

const HanddleNews: React.FC<Props> = ({ newsId }) => {
  const id = parseInt(newsId)
  switch (id) {
    case 1:
      return (
        <NewsPageItem
          title="Campeonato de league of legends é anunciado em parceria com o time Vivo Keyd"
          image={LolPosts}
        >
          <p>A fiap em parceria com Vivo Keyd, anuncia um campeonato de lol durante as férias de julho.</p>
          <p>Houve também a dispónibilisação do discord da VK, onde você pode conversar e montar o seu próprio time. Acesse o canal do discord aqui.</p>
          <p>A inscrição será feita atravéz de um google forms somente pelo capitão da equipe, pedindo seus dados e de mais seis integrantes da equipe, totalizando sete pessoas. Caso a equipe queira ela poderá inscrever um “coach”, a premiação será dada a até 7 membros do time.</p>
        </NewsPageItem>
      )
    case 2:
      return (
        <NewsPageItem
          title="Campeonato de league of legends é anunciado em parceria com o time Vivo Keyd"
          image={LolPosts}
        >
          <p>A fiap em parceria com Vivo Keyd, anuncia um campeonato de lol durante as férias de julho.</p>
          <p>Houve também a dispónibilisação do discord da VK, onde você pode conversar e montar o seu próprio time. Acesse o canal do discord aqui.</p>
          <p>A inscrição será feita atravéz de um google forms somente pelo capitão da equipe, pedindo seus dados e de mais seis integrantes da equipe, totalizando sete pessoas. Caso a equipe queira ela poderá inscrever um “coach”, a premiação será dada a até 7 membros do time.</p>
        </NewsPageItem>
      )
    default:
      return <Redirect to="/"/>
  }
}

export default HanddleNews
