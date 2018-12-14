import { createStore } from 'redux';
import { reducer as dialogReducer } from './dialog';

export const initialState = {
  dialogOpen: true // start with the dialog open!
};

// note that in a "real" Redux app, we'd likely have multiple reducers and use combineReducers to
// create one "mega reducer." But for the purposes of this simple demo, we can skip that step.
const store = createStore(dialogReducer, initialState);

export default store;