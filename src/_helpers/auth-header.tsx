export function authHeader() {
  let user = localStorage.getItem("user")
    ? localStorage.getItem("user")
    : null;

  if (user) {
    return (JSON.parse(user));
  } else {
    return {};
  }
}
