const initialState = {
    firstName: "",
    lastName: "",
    institute: "",
    branch: "",
    photo: '',
  };
  
  
  const ProfilePageReducer = (state = initialState, action) => {
  
      switch (action.type) {
        case "ADD FIRST NAME":
          return {
            ...state,
            firstName: action.payload,
          };
        case "ADD LAST NAME":
          return {
            ...state,
            lastName: action.payload,
          };
        case "ADD INSTITUTE":
          return {
            ...state,
              institute: action.payload,
          };
        case "ADD BRANCH":
          return {
            ...state,
            branch: action.payload,
          };
        case "ADD PHOTO":
          return {
            ...state,
            photo: action.payload
          };
        default:
          return initialState;
      }
  }
  
  export default ProfilePageReducer