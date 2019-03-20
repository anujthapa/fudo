import { GET_DATA } from "../action/types"

const initialState = {
  foodmenu: []
}

export default function(state = initialState, action) {
  console.log(action)
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        foodmenu: action.payload
      }

    default:
      return state
  }
}
