import { GET_DATA } from "../action/types"
const initialState = {
  foodmenu: null
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        foodmenu: action.payload
      }
    default:
      return state
  }
}
