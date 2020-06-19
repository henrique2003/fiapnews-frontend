import React from 'react'
import { StyledSubtitle } from './style'

interface Props {
  marginTop?: number
}

const Subtitle: React.FC<Props> = ({ children, marginTop }) => {
  return (
    <StyledSubtitle marginTop={marginTop}>
      {children}
    </StyledSubtitle>
  )
}

export default Subtitle
