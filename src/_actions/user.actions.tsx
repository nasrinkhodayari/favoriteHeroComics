import { userService } from "../components/Login/api";
import { alertActions } from "./";
import { history } from "../_helpers";
import { userConstants } from "../_constants";
export const userActions = {
  login,
  logout
};

function request(user: { username: any }) {
  return { type: userConstants.LOGIN_REQUEST, user };
}
function success(user: any) {
  return { type: userConstants.LOGIN_SUCCESS, user };
}
function failure(error: any) {
  debugger
  return { type: userConstants.LOGIN_FAILURE, error };
}
function login(username: any, password: any) {
  return (
    dispatch: (arg0: {
      type: string;
      user?: any;
      error?: any;
      message?: any;
    }) => void
  ) => {
    dispatch(request({ username }));
    let result = userService.login(username, password);
    if (result.length > 0) {
      dispatch(success(result));
      history.push("/");
      console.log("ok");
    } else {
      dispatch(failure("error"));
      dispatch(alertActions.error("error"));
    }
  };
}


function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}
