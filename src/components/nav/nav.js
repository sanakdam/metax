import React from 'react'
import PropTypes from 'prop-types'

import { Nav } from './component'

import NavItem from './item'

const AppNav = ({
  current,
  items,
  onChange,
}) => (
  <Nav>
    {
      items.map((item, index) => (
        <NavItem
          key={index}
          name={item.name}
          value={item.value}
          current={current}
          onChange={onChange}
        />
      ))
    }
  </Nav>
)

AppNav.propTypes = {
  current: PropTypes.string,
  items: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    value: PropTypes.string,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
}

export default AppNav
