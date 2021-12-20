import React from 'react'
import PropTypes from 'prop-types'

import {
  Input,
} from './component'

const AppInput = ({
  name,
  placeholder,
  value,
  onChange,
  ...props
}) => {
  const handleChange = React.useCallback((event) => {
    onChange(name, event.target.value)
  }, [name, onChange])

  return (
    <Input
      {...props}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
    />
  )
}

AppInput.defaultProps = {
  value: '',
  placeholder: '',
}

AppInput.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default AppInput