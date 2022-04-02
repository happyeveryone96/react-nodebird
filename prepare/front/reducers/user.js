export const initialState = {
  isLoggedIn: false,
  user: null,
  signUpData: {},
  loginData: {},
}

// action creater
export const loginAction = (data) => {
  return {
    type: 'LOG_IN',
    data,
  }
};

export const logoutAction = (data) => {
  return {
    type: 'LOG_OUT',
    data,
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        user: {
          ...state,
          isLoggedIn: true,
          user: action.data,
        },
      };
  case 'LOG_OUT':
    return {
      ...state,
      user: {
        ...state,
        isLoggedIn: false,
        user: null,
      },
    };
  default:
    return state;
  }
}

export default reducer;