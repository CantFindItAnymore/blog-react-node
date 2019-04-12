import React, { Component } from 'react'
// import {connect} from 'react-redux'
import './essayCard.styl'
import { Card, Divider, Tag } from 'antd'

class essayCard extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const { title, content, time, commitNum, mark } = this.props.data
    return (
      <div className='card-container'>
        <Card>
          <Divider orientation='left'>
            <span className='title-container'>{title}</span>
            <span className='time-container'>{time}</span>
          </Divider>
          <div className='content-container'>{content}</div>
          <Divider />
          <div className='content-footer'>
            <div>
              <i className='iconfont'>&#xe612;</i>
              {commitNum}
            </div>
            <div>
              <i className='iconfont'>&#xe60b;</i>
              <Tag color='cyan'>{mark}</Tag>
            </div>
          </div>
        </Card>
      </div>
    )
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(essayCard)
export default essayCard
