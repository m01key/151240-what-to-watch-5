import {combineReducers} from 'redux';
import moviesState from 'store/reducers/movies-state';
import loadData from 'store/reducers/load-data';


export default combineReducers({
  data: loadData,
  moviesState,
});