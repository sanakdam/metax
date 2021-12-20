import React from 'react'
import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'

import { connect } from 'react-redux'
import { actionListFollowing, actionListFollower } from '../../../stores/actions/profile'

import {
  Col,
  AppNav,
  Friends,
} from './component'

import queryString from '../../../helpers/queryString'
import fakeFriend from '../../helpers/fakes/friend'
import fakeNavFriend from '../../helpers/fakes/nav-friend'
import CardFriend from '../card-friend'
import More from './more'

const Profile = ({
  following,
  follower,
  onSelectNav,
  dispatchListFollowing,
  dispatchListFollower,
}) => {
  const limit = 15
  const { search } = useLocation()
  const query = queryString.parse(search)
  const [pageFollowing, setPageFollowing] = React.useState(1)
  const [pagesFollowing, setPagesFollowing] = React.useState(1)
  const [pageFollower, setPageFollower] = React.useState(1)
  const [pagesFollower, setPagesFollower] = React.useState(1)
  const [followings, setFollowings] = React.useState(fakeFriend(limit))
  const [followers, setFollowers] = React.useState(fakeFriend(limit))
  const [nav, setNav] = React.useState(() => fakeNavFriend.get(query.tab))

  React.useEffect(() => {
    dispatchListFollower(pageFollower, limit)
  }, [pageFollower, dispatchListFollower])

  React.useEffect(() => {
    dispatchListFollowing(pageFollowing, limit)
  }, [pageFollowing, dispatchListFollowing])

  React.useEffect(() => {
    if (!following.loading) {
      if (pageFollowing === 1) {
        setPagesFollowing(following.pages)
        setFollowings(following.payload)
        return
      }

      setPagesFollowing(following.pages)
      setFollowings(prevState => [
        ...prevState,
        ...following.payload,
      ])
    }
  }, [
    setFollowings,
    following.loading,
    setPagesFollowing,
  ])

  React.useEffect(() => {
    if (!follower.loading) {
      if (pageFollower === 1) {
        setPagesFollower(follower.pages)
        setFollowers(follower.payload)
        return
      }

      setPagesFollower(follower.pages)
      setFollowers(prevState => [
        ...prevState,
        ...follower.payload,
      ])
    }
  }, [
    setFollowers,
    follower.loading,
    setPagesFollower,
  ])

  const handleChangeFollowing = React.useCallback(() => {
    if (pagesFollowing > pageFollowing) {
      setPageFollowing(prevState => prevState + 1)
    }
  }, [
    pagesFollowing,
    pageFollowing,
    setPageFollowing,
  ])

  const handleChangeFollower = React.useCallback(() => {
    if (pagesFollower > pageFollower) {
      setPageFollower(prevState => prevState + 1)
    }
  }, [
    pagesFollower,
    pageFollower,
    setPageFollower,
  ])

  const handleSelectNav = React.useCallback((value) => {
    setNav(value)
    onSelectNav(value)
  }, [setNav, onSelectNav])

  const items = React.useMemo(() => {
    switch (nav) {
      case 'following':
        return followings
      default:
        return followers
    }
  }, [
    followings,
    followers,
    nav,
  ])

  const loading = React.useMemo(
    () => following.loading || follower.loading,
    [following.loading, follower.loading],
  )

  return (
    <React.Fragment>
      <Col sm="12">
        <AppNav
          current={nav}
          items={fakeNavFriend.items}
          onChange={handleSelectNav}
        />
      </Col>
      <Friends sm="12 py-4">
        {
          items.map((item, index) => (
            <CardFriend
              key={index}
              itemId={item.id}
              name={item.name}
              username={item.username}
              avatar={item.avater}
              isFollowing={item.isFollowing}
            />
          ))
        }

        <More
          nav={nav}
          loading={loading}
          onFollowing={handleChangeFollowing}
          onFollower={handleChangeFollower}
        />
      </Friends>
    </React.Fragment>
  )
}

Profile.propTypes = {
  following: PropTypes.shape({
    payload: PropTypes.array,
    loading: PropTypes.bool,
    pages: PropTypes.number,
  }),
  follower: PropTypes.shape({
    payload: PropTypes.array,
    loading: PropTypes.bool,
    pages: PropTypes.number,
  }),
  onSelectNav: PropTypes.func.isRequired,
  dispatchListFollowing: PropTypes.func.isRequired,
  dispatchListFollower: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  following: {
    payload: state.profile.listFollowing.payload,
    loading: state.profile.listFollowing.loading,
    pages: state.profile.listFollowing.pages,
  },
  follower: {
    payload: state.profile.listFollower.payload,
    loading: state.profile.listFollower.loading,
    pages: state.profile.listFollower.pages,
  },
})

const mapDispatchToProps = dispatch => ({
  dispatchListFollowing: (page, limit) => dispatch(actionListFollowing(page, limit)),
  dispatchListFollower: (page, limit) => dispatch(actionListFollower(page, limit)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
