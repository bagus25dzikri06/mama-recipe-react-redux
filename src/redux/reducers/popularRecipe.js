const initialState = {
  data: [],
  isLoading: false,
  isError: false
};

const popularRecipeReducer = (state=initialState, action) => {
  switch (action.type) {
    case 'GET_LIST_POPULER_RECIPES_PENDING':
      return {...state, isLoading: true};
    case 'GET_LIST_POPULER_RECIPES_FULFILLED':
      return {...state, isLoading: false, data: action.payload.data};
    case 'GET_LIST_POPULER_RECIPES_REJECTED':
      return {...state, isLoading: false, isError: true};
    default:
      return state;
  }
};

export default popularRecipeReducer;