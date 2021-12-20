import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  CardImage,
  CardTag,
  TextName,
  TextResult,
  Row,
} from './component'

const TagsItem = ({
  itemId,
  name,
  count,
}) => {
  const result = React.useMemo(() => {
    if (!itemId) return ''
    return `${count} Results`
  }, [itemId, count])

  return (
    <Card>
      <CardImage>
        <CardTag>{name}</CardTag>
      </CardImage>
      <Row>
        <TextName>{name}</TextName>
        <TextResult>{result}</TextResult>
      </Row>
    </Card>
  )
}

TagsItem.propTypes = {
  itemId: PropTypes.string,
  name: PropTypes.string,
  count: PropTypes.number,
}

export default TagsItem
