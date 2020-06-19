import styled from 'styled-components'
import { theme } from '../../styles'

export const StyledHeader = styled.div`
  background: ${theme.backgroundHeader};
  text-align: center;
  width: 100%;
  padding: 20px 0;
`

export const Logo = styled.h1`
  color: ${theme.baseColor};
  text-transform: uppercase;
  font-size: 40px;

  @media(max-width: 428px) {
    font-size: 35px;
  }
`

export const SpanNews = styled.span`
  color: ${theme.baseLightColor};
  margin-left: 10px;
`
