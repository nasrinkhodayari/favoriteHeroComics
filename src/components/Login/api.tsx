const users = require("./mocks/users.json");

export const userService = {
  login,
  logout
};

function login(username: any, password: any) {
  ;
  let result = users.filter((userItem: any) => {
    return userItem.user === username && userItem.password == password;
  });
  if (result.length > 0) {
    console.log(result);
    localStorage.setItem("user", JSON.stringify(result));
    return result;
  } else {
    return [];
  }
}

function logout() {
  localStorage.removeItem("user");
}
