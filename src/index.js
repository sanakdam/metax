import React from 'react'
import ReactDOM from 'react-dom'

import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './assets/style'

import Theme from './assets/theme'

import Routes from './routes'
import rootReducer from './stores'

const store = createStore(rootReducer, applyMiddleware(ReduxThunk))
const history = createBrowserHistory()

const App = () => (
  <ThemeProvider theme={Theme}>
    <Provider store={store}>
      <GlobalStyle />

      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
