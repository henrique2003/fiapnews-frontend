import styled from 'styled-components'
import { theme } from '../../styles'

export const StyledWins = styled.ul`
  display: grid;
  /* Variates */
  /* border: 1px solid red; */
  grid-template-columns: repeat(3, 1fr);
  max-width: 457px;
  margin: 25px auto;
  margin-bottom: 45px;
  /* End variates */
  margin-bottom: 60px;
  color: ${theme.baseLightColor};
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: normal;

  @media(max-width: 500px) {
    /* Variates */
    grid-template-columns: repeat(2, 1fr);
    max-width: 350px;
    /* End variates */
  }
`

export const WinerItem = styled.li`
  /* text-align: center; */
  margin-left: 30px;
  margin-top: 20px;

  @media(max-width: 500px) {
    margin-left: 43px;
  }
`
