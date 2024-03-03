//import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers';
import customHistory from '../utils/historyObj';


const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureStore = () => {
  const middleware = [];
  middleware.push(thunkMiddleware.withExtraArgument({history: customHistory}));


  /*if (__DEV__) {
    const loggerMiddleware = createLogger({ collapsed: true });
    middleware.push(loggerMiddleware);
  }
  */

  const composer = composeEnhancers(applyMiddleware(...middleware));

  return createStore(rootReducer, {}, composer);
};
// export const configureStore;
export const store = configureStore();

// Redux store type
export interface IReduxAction<ActionType, P = any> {
  type: ActionType;
  payload: P;
}
export type AppState = ReturnType<typeof rootReducer>;