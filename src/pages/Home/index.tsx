import React from 'react'
import { StyledHome } from './style'
import { Container } from '../../styles'
import { Title, News, Form, Subtitle } from '../../components'
import { LolPosts } from '../../assets'

const Home: React.FC = () => {
  return (
    <StyledHome>
      {/* <Title primaryColor>Lol - vencedores do dia</Title>
      <Wins>Time Gabriel, Time Paulo, Time Pasqual</Wins> */}
      <Title primaryColor marginTop={50}>Últimas notícias</Title>
      <Container marginTop={50}>
        <News
          image={LolPosts}
          id="1"
          title="Campeonato de league of legends é anunciado em parceria com o time Vivo Keyd"
          description="A fiap em parceria com Vivo Keyd, anuncia um campeonato de lol durante as férias de julho."
        />
        <News
          image={LolPosts}
          id="1"
          title="Campeonato de league of legends é anunciado em parceria com o time Vivo Keyd"
          description="A fiap em parceria com Vivo Keyd, anuncia um campeonato de lol durante as férias de julho."
        />
        <News
          image={LolPosts}
          id="1"
          title="Campeonato de league of legends é anunciado em parceria com o time Vivo Keyd"
          description="A fiap em parceria com Vivo Keyd, anuncia um campeonato de lol durante as férias de julho."
        />
        <Title marginTop={100} primaryColor>Você tem uma nova informação?</Title>
        <Subtitle marginTop={20}>Nos informe no formulário abaixo</Subtitle>
        <Form />
      </Container>
    </StyledHome>
  )
}

export default Home
