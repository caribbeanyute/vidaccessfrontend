import { types } from '@babel/core';
import { combineReducers } from 'redux';
import AuthReducer from './auth';
import LoginUIReducer from './loginUI';
import StreamReducer from './stream';
import videoJSReducer from './videoJS';
import uiReducer from './ui';

const reducers = {
  auth: AuthReducer,
  loginUIReducer: LoginUIReducer,
  stream: StreamReducer,
  videoJS: videoJSReducer,
  ui: uiReducer
};

const combinedReducer = combineReducers(reducers);

export interface RootState {
  auth: ReturnType<typeof AuthReducer>;
  loginUIReducer: ReturnType<typeof LoginUIReducer>
  stream : ReturnType<typeof StreamReducer>
  videoJS : ReturnType<typeof videoJSReducer>
  ui : ReturnType<typeof uiReducer>
}


export default combinedReducer;