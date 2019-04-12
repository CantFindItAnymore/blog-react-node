import { constant } from './'
import axios from 'axios'
import { fromJS } from 'immutable'

const essaysChange = (data) => ({
  type: constant.ESSAYS_CHANGE,
  data: fromJS(data)
  // data
})

export const getJson = () => {
  return (dispatch) => {
    axios.get('/api/essays.json')
      .then(res => {
        const data = res.data
        if (data.errCode === 0) {
          const essays = data.data
          const action = essaysChange(essays)
          dispatch(action)
        }
      })
      .catch(err => {
        console.log(err)
      })
  }
}
