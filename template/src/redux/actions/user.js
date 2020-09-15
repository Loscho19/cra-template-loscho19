export function login() {
  return {
    type: 'LOGIN',
  };
}

export function logout() {
  return {
    type: 'LOGOUT',
  };
}

// export function test(data) {
//   return function (dispatch) {
//     dispatch({
//       type: 'TEST',
//       data: data,
//     });
//   };
// }
