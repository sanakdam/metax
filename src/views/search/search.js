import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'

import { connect } from 'react-redux'
import { actionListUser } from '../../stores/actions/search'

import {
  Container,
  Content,
  Result,
  ResultRow,
  IconBack,
  TextTitle,
  Items,
  Box,
  Activity,
  BoxHeader,
  AppButton,
  Action,
  BoxItem,
  Spacer,
} from './component'

import Navigation from '../helpers/navigation'
import Profile from '../helpers/profile'
import SearchItem from './item'
import queryString from '../../helpers/queryString'
import fakeFriend from '../helpers/fakes/friend'

const Search = ({
  user,
  dispatchListUser,
}) => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const query = queryString.parse(search)
  const keyword = query.keyword || ''
  const pageSize = query.pageSize || 9
  const [page, setPage] = React.useState(1)
  const [pages, setPages] = React.useState(1)
  const [state, setState] = React.useState(true)
  const [users, setUsers] = React.useState(fakeFriend(15))

  React.useEffect(() => {
    if (state) {
      setState(false)
      dispatchListUser({
        page,
        pageSize,
        keyword,
      })
    }
  }, [
    state,
    setState,
    dispatchListUser,
  ])

  React.useEffect(() => {
    if (!user.loading) {
      if (page === 1) {
        setPages(user.pages)
        setUsers(user.payload)
        return
      }

      setPages(user.pages)
      setUsers(prevState => [
        ...prevState,
        ...user.payload,
      ])
    }
  }, [
    user.loading,
    setUsers,
    setPages,
  ])

  const handleSelectNav = React.useCallback((value) => {
    navigate(`/search?tab=${value}`, { replace: true })
  }, [navigate])

  const handleGoBack = React.useCallback(() => {
    navigate(-1)
  }, [navigate])

  const handleLoadMore = React.useCallback(() => {
    if (page < pages) {
      setPage(prevState => prevState + 1)
      setState(true)
    }
  }, [
    page,
    pages,
    setState,
    setPage,
  ])

  const hasMore = React.useMemo(() => (page < pages), [page, pages])

  return (
    <Container fluid>
      <Content>
        <Navigation title="Home page" />
        <Box sm="8" md="9">
          <BoxHeader className="justify-content-md-center">
            <Result>
              <IconBack onClick={handleGoBack} />
              <TextTitle>Results</TextTitle>
            </Result>
          </BoxHeader>
          <BoxItem className="justify-content-md-center">
            <Result>
              <Spacer />
              <ResultRow>
                <Items>
                  {
                    users.map((item, index) => (
                      <SearchItem
                        key={index}
                        itemId={item.id}
                        avatar={item.avater}
                        name={item.name}
                        username={item.username}
                      />
                    ))
                  }
                </Items>
                {
                  hasMore && (
                    <Action>
                      <AppButton
                        loading={user.loading}
                        onClick={handleLoadMore}
                      >
                        MORE
                      </AppButton>
                    </Action>
                  )
                }
              </ResultRow>
            </Result>
          </BoxItem>
        </Box>
        <Activity sm="4" md="3">
          <Profile onSelectNav={handleSelectNav} />
        </Activity>
      </Content>
    </Container >
  )
}

Search.propTypes = {
  user: PropTypes.shape({
    payload: PropTypes.array,
    loading: PropTypes.bool,
    pages: PropTypes.number,
  }),
  dispatchListUser: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  user: {
    payload: state.search.listUser.payload,
    loading: state.search.listUser.loading,
    pages: state.search.listUser.pages,
  },
})

const mapDispatchToProps = dispatch => ({
  dispatchListUser: data => dispatch(actionListUser(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Search)
