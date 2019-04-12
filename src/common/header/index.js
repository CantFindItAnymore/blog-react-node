import React, { Component } from 'react'
// import store from '../../store/index'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import './header.styl'
import List from '../list'
import {
  Input,
  Avatar
} from 'antd'
const Search = Input.Search

class Header extends Component {
  search (value) {
    console.log(value)
  }
  render () {
    // eslint-disable-next-line react/prop-types
    const { changeStatus } = this.props
    return (
      <div>
        <div className='header-container'>
          <div className='header-left'>
            AAAA
            <div className='list-icon-container'>
              <div
                className='list-icon'
                onClick={changeStatus}
              >
                三
              </div>
            </div>
          </div>
          <div className='header-center'>
            <Search
              placeholder='搜索文章'
              onSearch={this.search}
              style={
                {
                  width: 220
                }
              }
            />
          </div>
          <div className='header-right'>
            <div className='nav-item'>
              <i className='iconfont'>&#xe626;</i>
              首页
            </div>
            <div className='nav-item'>
              <i className='iconfont'>&#xe666;</i>
              归档
            </div>
            <div className='nav-item'>
              <i className='iconfont'>&#xe605;</i>
              分类
            </div>
            <div className='nav-item'>
              <i className='iconfont'>&#xe601;</i>
              关于我
            </div>
            <div className='headerImg'>
              <Avatar src='https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png' />
            </div>
          </div>
        </div>
        <List />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.getIn(['headerReducer', 'status'])
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    changeStatus () {
      dispatch(actionCreator.listChange())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
