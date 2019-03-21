import { GET_DATA } from "./types"
import axios from "axios"

/* import jwt_decode from "jwt-decode" */

//Register User
export const addReciepe = (userData, history) => dispatch => {
  axios.post("/api/post/", userData).then(res => history.push("/dashboard"))
}

export const getPost = () => dispatch => {
  axios.get("/api/post").then(res =>
    dispatch({
      type: GET_DATA,
      payload: res.data
    })
  )
}
