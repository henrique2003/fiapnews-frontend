import styled from 'styled-components'
import { theme } from '../../styles'

export const StyledNews = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding-bottom: 25px;
  border-bottom: 1px solid #829198;
  width: 100%;
  margin-top: 80px;

  &:first-child {
    margin-top: 60px;
  }

  @media(max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const Image = styled.div`
  padding-right: 10px;

  img {
    width: 100%;
  }

  @media(max-width: 900px) {
    padding-right: 0;
  }
`

export const Content = styled.div`
  padding-left: 10px;
  margin-top: 10px;

  h4 {
    color: ${theme.baseLightColor};
    font-size: 25px;
    font-weight: 400;
    margin-bottom: 25px;
    font-family: 'Monserrat', sans-serif;

    @media(max-width: 428px) {
      font-size: 22px;
    }
  }

  p {
    color: ${theme.baseLightColorOpacity};
    font-size: 19px;
    font-family: 'Monserrat', sans-serif;
    font-weight: 300;
    margin-bottom: 25px;

    @media(max-width: 428px) {
      font-size: 18px;
      margin-bottom: 17px;
    }
  }

  a {
    color: ${theme.baseColor};
    font-size: 19px;
    text-decoration: none;
    font-family: 'Monserrat', sans-serif;
    letter-spacing: 1px;
    font-weight: 300;

    @media(max-width: 428px) {
      font-size: 18px;
    }
  }
`
