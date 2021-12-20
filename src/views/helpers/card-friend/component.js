import styled from 'styled-components'

import AppText from '../../../components/text'
import AppImage from '../../../components/image'
import AppButton from '../../../components/button'

const Card = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: 16px;
  padding: 10px 16px;
  align-items: center;
`

const CardImage = styled(AppImage)`
  width: 40px;
  height: 40px;
  object-fit: cover;
  object-position: center;
  border: 1px solid ${props => props.theme.color.border};
  border-radius: 5px;
`

const CardRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 4px;
`


const TextName = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 16px;
  line-height: 120%;
`

const TextUsername = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.greyLight};
  font-size: 14px;
  line-height: 120%;
`

export {
  AppButton,
  Card,
  CardImage,
  CardRow,
  TextName,
  TextUsername,
}
