import React from 'react'
import PropTypes from 'prop-types'

import {
  TextUsername,
  TextName,
  Card,
  CardImage,
  CardRow,
} from './component'

const SearchItem = ({
  itemId,
  username,
  name,
  avatar,
}) => {
  const info = React.useMemo(() =>{
    if (!itemId) return ''
    return `by ${username}`
  }, [itemId, username])

  return (
    <Card>
      <CardImage source={avatar} />
      <CardRow>
        <TextName>{name}</TextName>
        <TextUsername>{info}</TextUsername>
      </CardRow>
    </Card>
  )
}

SearchItem.propTypes = {
  itemId: PropTypes.string,
  username: PropTypes.string,
  name: PropTypes.string,
  avatar: PropTypes.string,
}

export default SearchItem
