import React, { Component } from 'react'
import { connect } from 'react-redux'
import { actionCreator } from './store'
import './essays.styl'
import Card from '../essayCard'
import { Pagination } from 'antd'

class Essays extends Component {
  render () {
    // eslint-disable-next-line react/prop-types
    const essays = this.props.essays.toJS()
    return (
      <div className='essays-container'>
        <div className='essays-list'>
          {essays.map(item => {
            return <Card key={item.title} data={item} />
          })}
        </div>
        <div className='pagination-container'>
          <Pagination defaultCurrent={1} total={essays.length} />
        </div>
      </div>
    )
  }
  componentDidMount () {
    // eslint-disable-next-line react/prop-types
    this.props.getEssays()
  }
}

const mapStateToProps = state => {
  return {
    essays: state.getIn(['essaysReducer', 'essays'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getEssays () {
      dispatch(actionCreator.getJson())
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Essays)
