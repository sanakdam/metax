import React from 'react'
import PropTypes from 'prop-types'

import { Text } from './component'

const AppText = ({
  className,
  children,
}) => (
  <Text className={className}>
    {children}
  </Text>
)

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
}

export default Text
