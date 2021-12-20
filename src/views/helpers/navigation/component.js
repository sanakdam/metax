import styled from 'styled-components'

import AppText from '../../../components/text'
import AppIcon from '../../../components/icon'

const Container = styled.div`
  position: fixed;
  top: 0;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  background: ${props => props.theme.color.background};
  height: 70px;
  align-items: center;
  display: none;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    display: grid;
  }
`

const IconBack = styled(AppIcon).attrs(props => ({
  source: props.theme.icon.arrowLeft,
}))`
  width: 26px;
  height: 36px;
  cursor: pointer;
`

const TextTitle = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 24px;
`

export {
  Container,
  IconBack,
  TextTitle,
}
