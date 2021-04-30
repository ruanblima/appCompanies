export const Types = {
  LOGIN_USER: 'LOGIN_USER',
  LOGIN_USER_SUCCESS: 'LOGIN_USER_SUCCESS',
  LOGIN_USER_ERROR: 'LOGIN_USER_ERROR',
  LOGOUT: 'LOGOUT',
};

const INITIAL_STATE = {
  accessToken: null,
  client: null,
  uid: null,
  loginHasError: false,
  loading: false,
  investor: null,
  emailCurrent: null,
  password: null,
  isLogged: false,
};

export default function reducer(state = INITIAL_STATE, {type, payload}) {
  switch (type) {
    case Types.LOGOUT:
      return INITIAL_STATE;

    case Types.LOGIN_USER:
      return {
        ...state,
        emailCurrent: payload.email,
        password: payload.password,
        loading: true,
      };
    case Types.LOGIN_USER_SUCCESS:
      return {
        ...state,
        investor: payload.investor,
        loading: false,
        loginHasError: false,
        accessToken: payload.accessToken,
        client: payload.client,
        uid: payload.uid,
        isLogged: true,
      };
    case Types.LOGIN_USER_ERROR:
      return {
        ...state,
        loginHasError: true,
        loading: false,
        isLogged: false,
      };
    default:
      return state;
  }
}

export const loginUser = (email, password) => ({
  type: Types.LOGIN_USER,
  payload: {
    email,
    password,
  },
});

export const logout = () => ({
  type: Types.LOGOUT,
});
