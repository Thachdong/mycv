const initState = {
  isLoading: false,
  auth: JSON.parse(localStorage.getItem("auth")) || false,
  error: false,
};

const auth = (state = initState, action) => {
  switch (action.type) {
    case "SET_AUTH_REQUEST":
      return {
        ...state,
        isLoading: true,
      };
    case "SET_AUTH_SUCCESS":
      return {
        ...state,
        isLoading: false,
        auth: true,
      };
    case "SET_AUTH_FAIL":
      return {
        ...state,
        isLoading: false,
        auth: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default auth;
