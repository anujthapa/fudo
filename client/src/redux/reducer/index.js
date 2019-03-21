import { combineReducers } from "redux"
import indexReducer from "./indexReducer"
import authReducer from "./authReducer"
import profileReducer from "./profileReducer"

export default combineReducers({
  index: indexReducer,
  auth: authReducer,
  profile: profileReducer
})
