let initialState = {
  isLoggedIn: false,
  userData: null,
};

function user(state = initialState, action) {
  if (action.type === 'LOGIN') {
    return {
      ...state,
      isLoggedIn: true,
    };
  } else if (action.type === 'LOGOUT') {
    return initialState;
  } else {
    return state;
  }
}
export default user;
