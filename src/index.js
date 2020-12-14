import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import GlobalStyles from './styles/globals'
import App from './App'
import Store from './store/store'
import reportWebVitals from './reportWebVitals'

ReactDOM.render(
  <Provider store={Store}>
    <GlobalStyles/>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals()
