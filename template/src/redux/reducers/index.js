import { combineReducers } from 'redux';

//import alles Reducer
import user from './user';

/**
 * Fügt alle Reducer zusammen.
 */
export default combineReducers({
  user: user,
});
