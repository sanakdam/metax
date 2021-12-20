import React from 'react'
import PropTypes from 'prop-types'

import { NavItem } from './component'

const AppNavItem = ({
  current,
  value,
  name,
  onChange,
}) => {
  const active = React.useMemo(() => current === value, [current, value])

  const handleSelect = React.useCallback(() => {
    if (current !== value) {
      onChange(value)
    }
  }, [
    current,
    value,
    onChange,
  ])

  return (
    <NavItem
      active={active}
      onClick={handleSelect}
    >
      {name}
    </NavItem>
  )
}

AppNavItem.propTypes = {
  current: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default AppNavItem
