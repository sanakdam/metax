import styled from 'styled-components'

const Nav = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;
`

const NavItem = styled.div`
  padding: 32px 12px 12px 12px;
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${props => props.theme.color.black};
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.greyLight};
  font-size: 16px;
  cursor: pointer;
  user-select: none;

  ${props => props.active && `
    ${props.theme.text.bold};
    border-bottom: 2px solid ${props.theme.color.white};
    color: ${props.theme.color.white};
  `};
`

export {
  NavItem,
  Nav,
}
