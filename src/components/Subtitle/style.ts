import styled from 'styled-components'
import { theme } from '../../styles'

interface Props {
  marginTop?: number
}

export const StyledSubtitle = styled.div<Props>`
  width: 100%;
  text-align: center;
  font-size: 22px;
  font-family: 'OpenSans', sans-serif;
  font-weight: 500;
  color: ${theme.baseLightColorOpacity};
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
`
