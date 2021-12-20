import styled from 'styled-components'

const Text = styled.span.attrs(props => ({
  className: !props.children && 'shimmer',
  children: !props.children ? '\u00A0' : props.children,
}))``

export {
  Text,
}
