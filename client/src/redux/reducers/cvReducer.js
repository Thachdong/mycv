const initState = {
  isLoading: false,
  error: null,
  avatar: "",
  phone: "",
  email: "",
  birthDay: "",
  fullName: "",
  address: "",
  position: "",
  goal: "",
  experience: "",
  skills: [],
  languages: [],
  projects: [],
  knowledges: [],
};

const cv = (state = initState, action) => {
  switch (action.type) {
    case "SET_CV_REQUEST":
      return { ...state, isLoading: true };
    case "SET_CV_SUCCESS":
      return {
        ...state,
        isLoading: false,
        skills: [...state.skills],
        languages: [...state.languages],
        projects: [...state.projects],
        knowledges: [...state.knowledges],
        ...action.cv,
      };
    case "SET_CV_FAIL":
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default cv;
