import React from 'react'
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

import { TextNoMore } from './component'

const HasMore = ({
  nav,
  loading,
  onFollower,
  onFollowing,
}) => {
  const [refFollower, inViewFollower] = useInView({ threshold: 0.1 })
  const [refFollowing, inViewFollowing] = useInView({ threshold: 0.1 })

  React.useEffect(() => {
    if (inViewFollower) {
      onFollower()
    }

    if (inViewFollowing) {
      onFollowing()
    }
  }, [
    inViewFollower,
    inViewFollowing,
    onFollower,
    onFollowing,
  ])

  if (loading) {
    return <TextNoMore>Loading..</TextNoMore>
  }

  switch (nav) {
    case 'following':
      return (
        <TextNoMore ref={refFollowing}>
          All Shown
        </TextNoMore>
      )

    default:
      return (
        <TextNoMore ref={refFollower}>
          All Shown
        </TextNoMore>
      )
  }
}

HasMore.defaultProps = {
  nav: 'following',
}

HasMore.propTypes = {
  loading: PropTypes.bool,
  nav: PropTypes.oneOf(['following', 'followers']),
  onFollower: PropTypes.func.isRequired,
  onFollowing: PropTypes.func.isRequired,
}

export default HasMore
