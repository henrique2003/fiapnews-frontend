import styled from 'styled-components'
import { theme } from '../../styles'

const { baseColor, baseLightColorOpacity, backArrow } = theme
export const StyledNewsPageItem = styled.div`
  margin: 40px 0;

  svg {
    color: ${backArrow};
    font-size: 60px;
    margin-top: 10px;
    margin-bottom: 40px;
  }
`

export const TitleNewsPageItem = styled.h3`
  color: ${baseColor};
  font-size: 26px;

  @media(max-width: 500px) {
    font-size: 20px;
  }
`

export const Image = styled.div`
  margin: 30px 0;
  width: 100%;

  img {
    width: 100%;
    height: 100%;
  }
`

export const Matter = styled.div`
  p {
    margin-bottom: 20px;
    color: ${baseLightColorOpacity};
    font-size: 20px;
    font-weight: 300;

    @media(max-width: 500px) {
      font-size: 17px;
    }
  }
`
