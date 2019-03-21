import { SET_CURRENT_USER } from "./types"
import axios from "axios"
import setAuthToken from "../../components/utlis/setAuthToken"
import jwt_decode from "jwt-decode"
/* import jwt_decode from "jwt-decode" */

//Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/signin"))
}

//Login user
export const loginUser = userData => dispatch => {
  axios.post("/api/users/login", userData).then(res => {
    //save to local storage
    const { token } = res.data

    //Set tokan to local storage
    localStorage.setItem("jwtToken", token)

    //set tokan to Auth header
    setAuthToken(token)
    //decode token to get user data
    const decoded = jwt_decode(token)

    //set current user
    dispatch(setCurrentUser(decoded))
  })
}

//set current user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}

//log user out

export const logOutUser = () => dispatch => {
  //Remove tokon from local storage
  localStorage.removeItem("jwtToken")
  //remove Auth header fro future request
  setAuthToken(false)

  // set the current user to empty user which will make authorization fasle
  dispatch(setCurrentUser({}))
}
