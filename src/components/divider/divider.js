import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

const Horizontal = css`
  width: 100%;
  border-top: 0.5px solid ${props => props.theme.color.divider};
`

const Vertical = css`
  height: 100%;
  border-right: 0.5px solid ${props => props.theme.color.divider};
`

const AppDivider = styled.div`
  ${props => (props.vertical ? Vertical : Horizontal)}
`

AppDivider.defaultProps = {
  vertical: false,
}

AppDivider.propTypes = {
  vertical: PropTypes.bool,
}

export default AppDivider
