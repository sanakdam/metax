import styled from 'styled-components'

import AppIcon from '../components/icon'
import AppText from '../components/text'
import AppLink from '../components/link'

const App = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 0;
  min-height: 100vh;
  width: 100vw;
  max-width:100%;
  box-sizing: border-box;
  
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    padding-bottom: 66px;
  }
`

const Container = styled.div`
  width: 80px;
  background: ${props => props.theme.color.black};

  @media screen and (max-width: 768px) {
    width: 100%;
    background: ${props => props.theme.color.background};
  }
`

const LogoImage = styled(AppIcon).attrs(props => ({
  source: props.theme.icon.logo,
}))`
  width: 35px;
  height: 15px;
`

const Logo = styled.div`
  height: 88px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: min-content;
    padding: 0 20px;
    height: 70px;
  }
`

const Menu = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 22px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, fit-content(100%));
    z-index: 9;
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 66px;
    background: ${props => props.theme.color.black};
    align-items: center;
    justify-content: center;
  }
`

const MenuIcon = styled(AppIcon).attrs(props => ({
  source: props.theme.icon[props.source],
}))`
  width: 100%;
  height: 24px;

  @media screen and (max-width: 768px) {
    width: 48px;
  }
`

const MenuText = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.black};
  font-size: 12px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const MenuItem = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-rows: repeat(2, auto);
  grid-gap: 0;
  user-select: none;
  justify-content: center;

  ${props => props.active && `
    ${MenuText} {
      color: ${props.theme.color.white};
    }
  `};
`

export {
  App,
  AppLink,
  Container,
  LogoImage,
  Logo,
  Menu,
  MenuIcon,
  MenuText,
  MenuItem,
}
