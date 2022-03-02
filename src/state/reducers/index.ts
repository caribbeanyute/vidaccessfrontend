import { types } from '@babel/core';
import { combineReducers } from 'redux';
import AuthReducer from './auth';
import LoginUIReducer from './loginUI';
import StreamReducer from './stream'

const reducers = {
  auth: AuthReducer,
  loginUIReducer: LoginUIReducer,
  stream: StreamReducer
};

const combinedReducer = combineReducers(reducers);

export interface IReduxState {
  auth: ReturnType<typeof AuthReducer>;
  loginUIReducer: ReturnType<typeof LoginUIReducer>
  stream : ReturnType<typeof StreamReducer>
}

export default combinedReducer;