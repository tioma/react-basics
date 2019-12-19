import { combineReducers } from 'redux';

import { reducer as userInputReducer } from '../ducks/UserInput';
import { reducer as contextReducer } from '../ducks/Context';
import { reducer as hotelsReducer } from '../ducks/Hotels';

const reducers = { userInput: userInputReducer, context: contextReducer, hotels: hotelsReducer };

/* estado de mi aplicacion
state = {
  userInput: {
    value: '', value2: ''
  },
  context: {
    country,
    lann
  }
} */

export default combineReducers(reducers);
