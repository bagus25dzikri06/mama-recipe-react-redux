import { combineReducers } from 'redux';
import popularRecipeReducer from './popularRecipe';

const rootReducer = combineReducers({
  popularRecipe: popularRecipeReducer
});

export default rootReducer;