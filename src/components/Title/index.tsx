import React from 'react'
import { StyledTitle } from './style'

interface Props {
  primaryColor?: boolean
  marginTop?: number
}

const Title: React.FC<Props> = ({ children, primaryColor, marginTop }) => {
  return (
    <StyledTitle primaryColor={primaryColor} marginTop={marginTop}>{children}</StyledTitle>
  )
}

export default Title
