import React from 'react'
import { Provider } from 'react-redux'
import store from './store/index'
import Weather from '../src/component/Weather'

const App = () => {
  return (
     <Provider store={store}>
      <Weather/>
    </Provider>
  )
}

export default App
