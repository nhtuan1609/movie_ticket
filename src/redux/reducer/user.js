import { LOGIN_SUCCESS, REGISTER, LOGOUT } from '../constant/user';
const initialState = {
  isAuthenticated: localStorage.getItem('isAuthenticated'),
  userInfor: JSON.parse(localStorage.getItem('userInfor')),
};

const userReducer = (state = initialState, action) => {
  let { type, data } = action;
  switch (type) {
    case LOGIN_SUCCESS: {
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userInfor', JSON.stringify(data));
      return {
        ...state,
        isAuthenticated: true,
        userInfor: data,
      };
    }
    case REGISTER: {
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('userInfor', JSON.stringify(data));
      return {
        ...state,
        isAuthenticated: true,
        userInfor: data,
      };
    }
    case LOGOUT: {
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        userInfor: null,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
