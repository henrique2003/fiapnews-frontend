import React from 'react'
import { StyledNewsPageItem, TitleNewsPageItem, Image, Matter } from './style'
import { BsArrowLeft } from 'react-icons/bs'
import { Link } from 'react-router-dom'

interface Props {
  title: string
  image: string
}

const NewsPageItem: React.FC<Props> = ({ children, title, image }) => {
  return (
    <StyledNewsPageItem>
      <Link to="/">
        <BsArrowLeft />
      </Link>
      <TitleNewsPageItem>{title}</TitleNewsPageItem>
      <Image>
        <img src={image} alt=""/>
      </Image>
      <Matter>{children}</Matter>
    </StyledNewsPageItem>
  )
}

export default NewsPageItem
