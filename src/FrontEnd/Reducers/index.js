import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import user from './User.reducer'

const reducerFrontEnd = combineReducers({
   user:user
})
export default reducerFrontEnd
