import React from 'react'
import PropTypes from 'prop-types'

import {
  AppButton,
  Card,
  CardImage,
  CardRow,
  TextName,
  TextUsername,
} from './component'

const CardFriend = ({
  itemId,
  username,
  name,
  avatar,
  isFollowing,
}) => {
  const tagname = React.useMemo(() => username ? `@${username}` : '', [username])

  const Action = React.useMemo(() => {
    if (!itemId) return null

    if (!isFollowing) {
      return (
        <AppButton variant="outlined">
          Follow
        </AppButton>
      )
    }

    return (
      <AppButton variant="contained">
        Following
      </AppButton>
    )
  }, [itemId, isFollowing])

  return (
    <Card>
      <CardImage source={avatar} />
      <CardRow>
        <TextName>{name}</TextName>
        <TextUsername>{tagname}</TextUsername>
      </CardRow>
      {Action}
    </Card>
  )
}

CardFriend.defaultProps = {
  isFollowing: false,
}

CardFriend.propTypes = {
  itemId: PropTypes.string,
  name: PropTypes.string,
  username: PropTypes.string,
  avatar: PropTypes.string,
  isFollowing: PropTypes.bool,
}

export default CardFriend
