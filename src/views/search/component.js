import styled from 'styled-components'

import {
  Container,
  Row,
  Col,
} from 'react-bootstrap'

import AppText from '../../components/text'
import AppIcon from '../../components/icon'
import AppImage from '../../components/image'
import AppButton from '../../components/button'

const TextTitle = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 30px;
`

const Activity = styled(Col)`
  background: ${props => props.theme.color.black};
  padding: 0;
  height: 100vh;
  box-sizing: border-box;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Content = styled(Row)`
  height: 100vh;
`

const Result = styled.div`
  max-width: 775px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 24px;
  padding: 0;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`

const ResultRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
`

const IconBack = styled(AppIcon).attrs(props => ({
  source: props.theme.icon.arrowLeft,
}))`
  width: 26px;
  height: 45px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Spacer = styled.div`
  width: 26px;
  height: 45px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 34px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const Card = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 12px;
`

const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2px;
`

const CardImage = styled(AppImage)`
  width: 219px;
  height: 146px;
  object-fit: cover;
  object-position: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 222px;
  }
`

const TextName = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 14px;
`

const TextUsername = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.grey};
  font-size: 12px;
`

const Action = styled.div`
  width: 50%;
  box-sizing: border-box;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const Box = styled(Col)`
  overflow: hidden;
  height: 100vh;
`

const BoxItem = styled(Row)`
  height: calc(100vh - 70px);
  overflow: auto;
  padding-bottom: 24px;
  
  ::-webkit-scrollbar { 
    display: none; 
  }
`

const BoxHeader = styled(Row)`
  height: 70px;
  display: flex;
  align-items: center;
`

export {
  BoxHeader,
  BoxItem,
  Box,
  Action,
  Container,
  AppButton,
  Row,
  Content,
  Result,
  ResultRow,
  IconBack,
  TextUsername,
  TextTitle,
  TextName,
  Card,
  CardImage,
  CardRow,
  Items,
  Col,
  Activity,
  Spacer,
}
