import React from 'react'
import PropTypes from 'prop-types'

import { Icon } from './component'

const AppIcon = ({
  className,
  source,
  ...props
}) => (
  <Icon
    {...props}
    className={className}
    source={source}
  />
)

AppIcon.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string.isRequired,
}

export default AppIcon
