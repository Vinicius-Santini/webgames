import {
  createStore,
  combineReducers,
  applyMiddleware,
} from '../../node_modules/redux';
import thunk from 'redux-thunk';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import gameReducer from './reducers/gameReducer';

const reducers = combineReducers({
  game: gameReducer,
});

const makeStore = () => {
  return createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
};

export const storeWrapper = createWrapper(makeStore, { debug: false });
