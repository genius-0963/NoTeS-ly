const initialState = [];

const AllNotesReducer =  (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ALL_NOTES":
      return action.payload;
    default: return initialState
  }
};

export default AllNotesReducer;