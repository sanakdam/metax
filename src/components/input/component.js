import styled from 'styled-components'

const Input = styled.input`
  ${props => props.theme.text.normal};
  padding: 20px 18px;
  margin: 0px;
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 14px;
  background-color: transparent;
  border-width: 3px;
  border-style: solid;
  border-color: ${props => props.theme.color.grey};
  color: ${props => props.theme.color.white};
  caret-color: ${props => props.theme.color.white};
  height: min-content;
  width: 100%;

  :focus, :focus-visible {
    outline: 0;
    border-color: ${props => props.theme.color.orange};
  }

  ::placeholder { 
    color: ${props => props.theme.color.greyDark};
  }
`

export {
  Input,
}