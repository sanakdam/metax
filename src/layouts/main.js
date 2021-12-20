import React from 'react'
import { Outlet } from 'react-router-dom'

import { App } from './component'

import AppSidebar from './sidebar'

const Main = () => (
  <App>
    <AppSidebar />
    <Outlet />
  </App>
)

export default Main
