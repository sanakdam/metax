import React from 'react'
import { useLocation } from 'react-router-dom'

import {
  Container,
  LogoImage,
  Logo,
  Menu,
} from './component'

import AppMenu from './menu'

import fake from './fake'

const AppSidebar = () => {
  const location = useLocation()

  return (
    <Container>
      <Logo>
        <LogoImage />
      </Logo>
      <Menu>
        {
          fake.items.map((item, index) => (
            <AppMenu
              key={index}
              name={item.name}
              to={item.to}
              path={location.pathname}
              actives={item.actives}
              icons={item.icons}
            />
          ))
        }
      </Menu>
    </Container>
  )
}


export default AppSidebar
