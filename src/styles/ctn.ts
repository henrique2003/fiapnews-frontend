import styled from 'styled-components'

interface Props {
  marginTop?: number
}

export const Container = styled.div<Props>`
  max-width: 1000px;
  margin: 0 auto;
  margin-top: ${(props) => props.marginTop ?? 0}px;

  @media(max-width: 1050px) {
    margin: 0 30px;
  }

  @media(max-width: 428px) {
    margin: 0 20px;
  }
`
