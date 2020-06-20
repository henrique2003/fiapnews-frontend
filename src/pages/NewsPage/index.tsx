import React, { useEffect } from 'react'
import { Container } from '../../styles'
import HanddleNews from './Handdlenews'

interface Props {
  match: {
    params: {
      id: string
    }
  }
}

const NewsPage: React.FC<Props> = ({ match }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <Container>
        <HanddleNews newsId={match.params.id} />
      </Container>
    </>
  )
}

export default NewsPage
