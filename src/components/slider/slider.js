import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Thumb = css`
  appearance: none;
  width: 24px;
  height: 24px;
  background-color: ${props => props.theme.color.black};
  border-radius: 100%;
  border: 6px solid ${props => props.theme.color.yellow};
  box-shadow: none;
  margin-top: -8px;
  cursor: pointer;
`

const Input = styled.input`
  appearance: none;
  cursor: pointer;
  height: 8px;
  margin: 0;
  padding: 0;
  border-radius: 100%;
  background: transparent;

  :focus {
    outline: none;
  }

  ::-webkit-slider-thumb {
    ${Thumb};
  }

  ::-moz-range-thumb {
    ${Thumb};
  }

  ::-ms-thumb {
    ${Thumb};
  }

  ::-webkit-slider-runnable-track {
    height: 8px;
    background-color: ${props => props.theme.color.grey};
    border-radius: calc(8px / 2);
  }

  ::-moz-range-track{
    background: linear-gradient(90deg,black 50%,red 50%);
  }
`

const AppSlider = ({
  name,
  max,
  value,
  onChange,
}) => {
  const handleChange = React.useCallback((event) => {
    onChange(name, event.target.value)
  }, [name, onChange])

  return (
    <Input
      type="range"
      max={max}
      min={1}
      value={value}
      onChange={handleChange}
    />
  )
}

AppSlider.propTypes = {
  value: PropTypes.any,
  name: PropTypes.string.isRequired,
  max: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default AppSlider