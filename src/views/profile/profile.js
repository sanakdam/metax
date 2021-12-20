import React from 'react'
import { useNavigate } from 'react-router-dom'

import AppProfile from '../helpers/profile'

const Profile = () => {
  const navigate = useNavigate()

  const handleSelectNav = React.useCallback((value) => {
    navigate(`/profile?tab=${value}`, { replace: true })
  }, [navigate])

  return (
    <AppProfile
      onSelectNav={handleSelectNav}
    />
  )
}


export default Profile
