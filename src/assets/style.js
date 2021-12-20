import { createGlobalStyle } from 'styled-components'
import UbuntuRegular from './fonts/Ubuntu-Regular.ttf'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Ubuntu-Regular';
    src: url(${UbuntuRegular}) format('truetype');
  }

  body {
    background-color: #181818;
    margin: 0;
    padding: 0;
    font-family: 'Ubuntu-Regular';
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  @media screen and (max-width: 768px) {
    ::-webkit-scrollbar {
      width: 0;
      height: 0;
    }
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #F1F1F1; 
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888888; 
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #1B1B1B; 
  }

  .shimmer {
    background: #929292;
    background-image: linear-gradient(
      to right,
      #929292 0%,
      rgba(255, 255, 255, 0.1) 20%,
      #929292 40%, #929292 100%);
    background-repeat: no-repeat;
    display: inline-block;
    position: relative;
  
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: placeholderShimmer;
    animation-timing-function: linear;
  }
  
  @keyframes placeholderShimmer {
    0% {
      background-position: -468px 0;
    }
  
    100% {
      background-position: 468px 0;
    }
  }
`
export default GlobalStyle
