import { constant } from './'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  status: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case constant.LIST_CHANGE:
      return state.set('status', !state.get('status'))
    default:
      return state
  }
}
