import styled, { css } from 'styled-components'

const Normal = css`
  color: ${props => props.theme.color.black};
  background: ${props => props.theme.color.white};
  height: 40px;
  border-radius: 6px;

  :hover {
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.black};
  }
`

const Outlined = css`
  color: ${props => props.theme.color.white};
  background: ${props => props.theme.color.black};
  height: 29px;
  border-radius: 20px;

  :hover {
    color: ${props => props.theme.color.black};
    background: ${props => props.theme.color.white};
  }
`

const Contained = css`
  color: ${props => props.theme.color.black};
  background: ${props => props.theme.color.white};
  height: 29px;
  border-radius: 20px;

  :hover {
    color: ${props => props.theme.color.white};
    background: ${props => props.theme.color.black};
  }
`

const Button = styled.button`
  ${props => props.variant};
  ${props => props.theme.text.bold};
  font-size: 14px;
  user-select: none;
  border: 1px solid ${props => props.theme.color.white};
  padding: 0 10px;
  box-sizing: border-box;
  width: 100%;

  :focus, :active:focus {
    box-shadow: none;
  }
`

export {
  Button,
  Normal,
  Outlined,
  Contained,
}