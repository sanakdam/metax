import React from 'react'
import PropTypes from 'prop-types'

import {
  Button,
  Normal,
  Outlined,
  Contained,
} from './component'

const Mixin = {
  normal: Normal,
  outlined: Outlined,
  contained: Contained,
}

const AppButton = ({
  children,
  loading,
  variant,
  ...props
}) => (
  <Button
    {...props}
    variant={Mixin[variant]}
  >
    {
      (loading)
        ? 'Loading..'
        : children
    }
  </Button>
)

AppButton.defaultProps = {
  variant: 'normal',
  loading: false,
}

AppButton.propTypes = {
  loading: PropTypes.bool,
  variant: PropTypes.oneOf(['normal', 'outlined', 'contained']),
  children: PropTypes.string.isRequired,
}

export default AppButton