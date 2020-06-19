import React from 'react'
import { StyledHeader, Logo, SpanNews } from './style'

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <Logo>fiap<SpanNews>news</SpanNews></Logo>
    </StyledHeader>
  )
}

export default Header
