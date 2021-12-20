import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

import {
  Container,
  IconBack,
  TextTitle,
} from './component'

const Navigation = ({ title }) => {
  const navigate = useNavigate()

  const handleGoBack = React.useCallback(() => {
    navigate(-1)
  }, [navigate])

  return (
    <Container>
      <IconBack onClick={handleGoBack} />
      <TextTitle>{title}</TextTitle>
    </Container>
  )
}

Navigation.propTypes = {
  title: PropTypes.string,
}

export default Navigation
