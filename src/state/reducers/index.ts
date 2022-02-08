import { combineReducers } from 'redux';
import AuthReducer from './auth';
import LoginUIReducer from './loginUI';

const reducers = {
  auth: AuthReducer,
  loginUIReducer: LoginUIReducer
};

const combinedReducer = combineReducers(reducers);

export interface IReduxState {
  auth: ReturnType<typeof AuthReducer>;
  loginUIReducer: ReturnType<typeof LoginUIReducer>
}

export default combinedReducer;