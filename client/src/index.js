import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import * as serviceWorker from './serviceWorker'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import { configure } from './store/store'

import Ledger from './components/Ledger'

export const store = configure()

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Ledger />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()
