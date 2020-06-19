import styled from 'styled-components'
import { theme } from '../../styles'

const { baseColor, baseLightColorOpacity, borderForm, formButtonHover } = theme
export const StyledForm = styled.form`
  background: transparent;
  border-radius: 3px;
  border: 1px solid ${borderForm} !important;
  padding: 35px 50px;
  padding-bottom: 50px;
  margin: 20px auto;
  margin-top: 50px;
  max-width: 1000px;

  label {
    color: ${baseColor};
    font-size: 20px;
  }

  input, textarea {
    resize: none;
    margin-top: 15px;
    border: none !important;
    color: ${baseLightColorOpacity};
    width: 100%;
    background: transparent;
    font-size: 17px;
    padding: 5px 1px;
  }

  section {
    margin-top: 35px;
    max-width: 150px;

    @media(max-width: 600px) {
      max-width: 100%;
    }

    button {
      border: none;
      width: 100%;
      background: ${baseColor};
      color: ${baseLightColorOpacity};
      height: 38px;
      font-family: 'Roboto', sans-serif;
      font-weight: bold;
      border-radius: 1px;
      text-align: center;
      font-size: 17px;
      cursor: pointer;
      transition: all .2s ease;

      &:hover {
        background: ${formButtonHover};
        transition: all .2s ease;
      }
    }
  }

  @media(max-width: 1050px) {
    margin: 20px;
    margin-top: 50px;
  }

  @media(max-width: 600px) {
    padding: 35px;
  }

  @media(max-width: 600px) {
    padding: 30px;
  }
`

export const Group = styled.div`
  margin: 15px 0;
  border-bottom: 1px solid ${borderForm};

  &:nth-child(2) {
    margin-top: 40px !important;
  }
`
