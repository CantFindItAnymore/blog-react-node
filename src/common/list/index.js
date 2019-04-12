import React, { Component } from 'react'
import { connect } from 'react-redux'
import './list.styl'
// import 'animate.css'
import { CSSTransition } from 'react-transition-group'
import {
  Menu
} from 'antd'

const SubMenu = Menu.SubMenu

class List extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { status } = this.props
    return (
      <div className='list-container'>
        <CSSTransition
          in={status}
          timeout={200}
          classNames='slide'
        >
          <div
            className={
              (status ? 'spread' : '') + ' transition'
            }
          >
            <Menu
              mode='vertical'
            >
              <SubMenu
                title={<div><i className='iconfont'>&#xe626;</i>首页</div>}
              />
              <SubMenu
                title={<div><i className='iconfont'>&#xe666;</i>归档</div>}
              />
              <SubMenu
                title={<div><i className='iconfont'>&#xe605;</i>分类</div>}
              />
              <SubMenu
                title={<div><i className='iconfont'>&#xe601;</i>关于我</div>}
              />
            </Menu>
          </div>
        </CSSTransition>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    status: state.getIn(['headerReducer', 'status'])
  }
}

export default connect(mapStateToProps)(List)
