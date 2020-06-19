import styled from 'styled-components'
import { theme } from '../../styles'

const { baseColor, titleColor } = theme
interface Props {
  primaryColor?: boolean
  marginTop?: number
}

export const StyledTitle = styled.h3<Props>`
  color: ${({ primaryColor }) => primaryColor ? baseColor : titleColor};
  margin-top: ${({ marginTop }) => marginTop ?? 0}px;
  font-size: 30px;
  width: 100%;
  text-align: center;
  font-weight: bold;
`
