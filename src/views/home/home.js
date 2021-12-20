import React from 'react'
import { useNavigate } from 'react-router-dom'

import {
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
} from './component'

import queryString from '../../helpers/queryString'
import Profile from '../helpers/profile'

const Home = () => {
  const navigate = useNavigate()
  const [form, setForm] = React.useState({
    keyword: '',
    pageSize: 1,
  })

  const handleSelectNav = React.useCallback((value) => {
    navigate(`/?tab=${value}`, { replace: true })
  }, [navigate])

  const handleChangeForm = React.useCallback((name, value) => {
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }))
  }, [setForm])

  const handleSearch = React.useCallback(() => {
    const query = queryString.stringify(form)
    navigate(`/search?${query}`)
  }, [
    form,
    queryString,
    navigate,
  ])

  return (
    <Container>
      <Content>
        <Item>
          <Row>
            <TextTitle>Search</TextTitle>
            <AppInput
              placeholder="Keyword"
              name="keyword"
              value={form.keyword}
              onChange={handleChangeForm}
            />
          </Row>
          <AppDivider />
          <Row>
            <TextTitle># of results per page</TextTitle>
            <Result>
              <TextCounter>{form.pageSize} </TextCounter>
              <TextResult>results</TextResult>
            </Result>
            <AppSlider
              max={50}
              name="pageSize"
              value={form.pageSize}
              onChange={handleChangeForm}
            />
          </Row>
          <AppDivider />
        </Item>
        <Action>
          <AppButton onClick={handleSearch}>
            SEARCH
          </AppButton>
        </Action>
      </Content>
      <Activity>
        <Profile onSelectNav={handleSelectNav} />
      </Activity>
    </Container >
  )
}

export default Home
