import styled from 'styled-components'

const Container = styled.div`
  ${props => props.shimer && `
    background: ${props.theme.color.shimer};
  `};
`

const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))`
  display: block;
`

export {
  Container,
  Image,
}
