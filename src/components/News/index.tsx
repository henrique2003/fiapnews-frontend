import React from 'react'
import { StyledNews, Image, Content } from './style'
import { Link } from 'react-router-dom'

interface Props {
  id: string
  title: string
  description: string
  image: string
}

const News: React.FC<Props> = ({ title, description, id, image }) => {
  return (
    <StyledNews>
      <Image>
        <img src={image} alt=""/>
      </Image>
      <Content>
        <h4>{title}</h4>
        <p>{description}</p>
        <Link to={`mais/${id}`}>Ler mais...</Link>
      </Content>
    </StyledNews>
  )
}

export default News
