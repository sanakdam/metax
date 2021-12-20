import styled from 'styled-components'

import AppText from '../../components/text'

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: 864px;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    padding: 0 20px
  }
`

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 24px;
  height: min-content;
  padding: 24px 0;
`

const TextTitle = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 24px;
`

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 24px;

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const Card = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  grid-gap: 10px;
  height: min-content;
`

const CardImage = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: end;
  padding: 14px 10px;
  width: 150px;
  height: 150px;
  background: ${props => props.theme.color.tag};
  border-radius: 10px;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 150px;
  }
`

const CardTag = styled.div`
  display: flex;
  padding: 4px 10px;width: fit-content;
  border: 4px solid ${props => props.theme.color.white};
  border-radius: 8px;
  height: min-content;
  width: fit-content;
  font-size: 24px;
  color: ${props => props.theme.color.white};
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1; 
  -webkit-box-orient: vertical;
`

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2px;
`

const TextName = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.white};
  font-size: 14px;
`

const TextResult = styled(AppText)`
  ${props => props.theme.text.normal};
  color: ${props => props.theme.color.grey};
  font-size: 12px;
`

export {
  Container,
  Content,
  Card,
  CardImage,
  CardTag,
  TextTitle,
  TextName,
  TextResult,
  Row,
  Items,
}
