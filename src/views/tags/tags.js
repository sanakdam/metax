import React from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { actionListTag } from '../../stores/actions/tag'

import {
  Container,
  Content,
  TextTitle,
  Items,
} from './component'

import TagsItem from './item'
import fakeTag from '../helpers/fakes/tag'
import Navigation from '../helpers/navigation'

const Tags = ({
  tag,
  dispatchListTag,
}) => {
  React.useEffect(() => {
    dispatchListTag()
  }, [dispatchListTag])

  const items = React.useMemo(() => {
    if (tag.loading) return fakeTag
    return tag.payload
  }, [
    fakeTag,
    tag.loading,
    tag.payload,
  ])

  return (
    <Container>
      <Content>
        <Navigation title="Home page" />
        <TextTitle>Tags</TextTitle>
        <Items>
          {
            items.map((item, index) => (
              <TagsItem
                key={index}
                itemId={item.id}
                name={item.name}
                count={item.count}
              />
            ))
          }
        </Items>
      </Content>
    </Container>
  )
}

Tags.propTypes = {
  tag: PropTypes.shape({
    payload: PropTypes.array,
    loading: PropTypes.bool,
  }),
  dispatchListTag: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  tag: {
    payload: state.tag.listTag.payload,
    loading: state.tag.listTag.loading,
  },
})

const mapDispatchToProps = dispatch => ({
  dispatchListTag: () => dispatch(actionListTag()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Tags)
