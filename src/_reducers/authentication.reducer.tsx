import { userConstants } from "../_constants";

let user = localStorage.getItem("user") ? localStorage.getItem("user") : null;

let userInfo = null;
if (user) {
  userInfo = JSON.parse(user);
}
const initialState = userInfo ? { loggedIn: true, userInfo } : {};

export function authentication(
  state = initialState,
  action: { type: any; user: any }
) {
  switch (action.type) {
    case userConstants.LOGIN_REQUEST:
      return {
        loggingIn: true,
        user: action.user
      };
    case userConstants.LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case userConstants.LOGIN_FAILURE:
      return {
        loggedIn: false,
        user: []
      };
    case userConstants.LOGOUT:
      return {};
    default:
      return state;
  }
}
