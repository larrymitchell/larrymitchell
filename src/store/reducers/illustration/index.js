const initialState = {
  currentImageKey: ""
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_IMAGE_KEY":
      return { ...state, currentImageKey: action.data };
    default:
      return state;
  }
};

export default reducer;
