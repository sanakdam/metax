import styled from 'styled-components'

import { Col } from 'react-bootstrap'

import AppNav from '../../../components/nav'
import AppText from '../../../components/text'

const Friends = styled(Col)`
  height: calc(100vh - 70px);
  overflow: auto;
`

const TextNoMore = styled(AppText)`
  ${props => props.theme.text.normal};
  font-size: 14px;
  color: ${props => props.theme.color.white};
`

export {
  Col,
  AppNav,
  Friends,
  TextNoMore,
}
