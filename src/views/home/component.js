import styled from 'styled-components'

import AppInput from '../../components/input'
import AppText from '../../components/text'
import AppDivider from '../../components/divider'
import AppSlider from '../../components/slider'
import AppButton from '../../components/button'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 375px;
  grid-gap: 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const TextTitle = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 24px;
`

const Result = styled.span``

const TextCounter = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 48px;
`

const TextResult = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 16px;
`

const Activity = styled.div`
  background: ${props => props.theme.color.black};
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Content = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  grid-gap: 30px;
  padding: 32px 0 87px 0;
  width: 80%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    padding: 0 20px 20px 20px;
    width: 100%;
  }
`

const Item = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 30px;
`

const Action = styled.div`
  display: grid;
  align-items: flex-end;
  bottom: 0;
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 20px;
`

export {
  Container,
  TextTitle,
  Content,
  Activity,
  TextResult,
  TextCounter,
  Result,
  AppDivider,
  AppInput,
  AppSlider,
  Row,
  Item,
  Action,
  AppButton,
}
