import axios from 'axios';

export const getPopularRecipeList = () => {
  return {
    type: 'GET_LIST_POPULER_RECIPES',
    payload: axios({
      url: `${process.env.REACT_APP_BACKEND}/popular`,
      method: 'GET'
    })
  };
};