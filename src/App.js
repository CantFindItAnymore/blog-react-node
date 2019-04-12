import React, { Component } from 'react'
import Header from './common/header'
import Essays from './common/essays'
import Back from './common/back'
import { Provider } from 'react-redux'
import { BrowserRouter, Route } from 'react-router-dom'
import store from './store'
import './App.css'
import { BackTop } from 'antd'

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <Header />
        <BrowserRouter>
          <div>
            <Route path='/' exact component={Essays} />
          </div>
        </BrowserRouter>
        <BackTop className='up-container'>
          <div className='ant-back-top-inner'>
            <i className='iconfont'>&#xe602;</i>
          </div>
        </BackTop>
        <Back />
      </Provider>
    )
  }
}

export default App
