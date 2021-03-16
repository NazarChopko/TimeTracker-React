import {createStore} from 'redux'

import inputReducer from './reducer/inputReducer'

const store = createStore(inputReducer)

export default store