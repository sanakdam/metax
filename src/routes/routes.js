import React from 'react'
import loadable from '@loadable/component'
import { Routes, Route } from 'react-router-dom'

import Layout from '../layouts'

import Loader from '../components/loader'

const Home = loadable(() => import(/* webpackChunkName: "home" */ '../views/home'), { fallback: <Loader /> })
const Tags = loadable(() => import(/* webpackChunkName: "tags" */ '../views/tags'), { fallback: <Loader /> })
const Search = loadable(() => import(/* webpackChunkName: "search" */ '../views/search'), { fallback: <Loader /> })
const Profile = loadable(() => import(/* webpackChunkName: "profile" */ '../views/profile'), { fallback: <Loader /> })

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="tags" element={<Tags />} />
      <Route path="search" element={<Search />} />
      <Route path="profile" element={<Profile />} />
      <Route path="*" element={<Home />} />
    </Route>
  </Routes>
)

export default AppRoutes
