import { GET_DATA } from "./types"
import { data } from "../../components/utlis/data"

export const getData = () => dispatch => {
  dispatch({
    type: GET_DATA,
    payload: data
  })
}
