import React from 'react'
import PropTypes from 'prop-types'

import {
  Container,
  Image,
} from './component'

import loadingSrc from './loading-src'

const AppImage = ({
  className,
  source,
  alt,
}) => {
  const [error, setError] = React.useState(false)
  const [isVisible, setIsVisible] = React.useState(false)

  const src = React.useMemo(() => {
    if (source && !error) return source

    return loadingSrc
  }, [source, error])
  const shimer = React.useMemo(() => {
    if (!source || !isVisible || error) return true

    return false
  }, [source, isVisible, error])

  const handleLoaded = React.useCallback(() => {
    if (!source) {
      setIsVisible(false)
      return
    }

    setIsVisible(true)
  }, [source, setIsVisible])
  const handleError = React.useCallback(() => {
    setError(true)
  }, [setError])

  return (
    <Container
      shimer={shimer}
      className={className}
    >
      <Image
        className={className}
        src={src}
        alt={alt}
        onLoad={handleLoaded}
        onError={handleError}
      />
    </Container>
  )
}

AppImage.defaultProps = {
  alt: 'Image',
}

AppImage.propTypes = {
  className: PropTypes.string,
  source: PropTypes.string,
  alt: PropTypes.string,
}

export default AppImage
