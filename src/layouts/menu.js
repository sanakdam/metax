import React from 'react'
import PropTypes from 'prop-types'

import {
  MenuIcon,
  MenuText,
  MenuItem,
  AppLink,
} from './component'

import fake from './fake'

const AppMenu = ({
  to,
  name,
  path,
  icons,
  actives,
}) => {
  const stats = React.useMemo(() => fake.get(path, icons, actives), [
    path,
    icons,
    actives,
    fake,
  ])

  return (
    <AppLink to={to}>
      <MenuItem active={stats.active}>
        <MenuIcon source={stats.icon} />
        <MenuText>{name}</MenuText>
      </MenuItem>
    </AppLink>
  )
}

AppMenu.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  to: PropTypes.string.isRequired,
  icons: PropTypes.array.isRequired,
  actives: PropTypes.array.isRequired,
}

export default AppMenu
