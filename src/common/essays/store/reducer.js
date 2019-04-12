import { constant } from './'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  essays: []
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.ESSAYS_CHANGE:
      return state.set('essays', action.data)
    default:
      return state
  }
}
