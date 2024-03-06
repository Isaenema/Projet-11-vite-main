import { EDIT_USERINFO, GET_USERINFO } from "../actions/UserActions";

const initialState = {};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERINFO:
      return action.payload;
    case EDIT_USERINFO:
      return action.payload;
    default:
      return state;
  }
}
