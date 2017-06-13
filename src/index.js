/**
 * @flow
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { AppContainer } from 'react-hot-loader'
import Counter from './Counter'
import store from './store'

function renderApp(Component) {
  render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.querySelector('#root')
  )
}

renderApp(Counter)

if (module.hot) {
  module.hot.accept('./Counter', () => renderApp(Counter))
}
