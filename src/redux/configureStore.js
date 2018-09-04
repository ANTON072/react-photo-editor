import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { fork, all } from 'redux-saga/effects';

import photo, { photoSaga } from './modules/photo';

const composeEnhancers = composeWithDevTools({});
const reducer = combineReducers({ photo });
const sagaMiddleware = createSagaMiddleware();
const middleweare = [sagaMiddleware];

function* rootSaga() {
  yield all([fork(photoSaga)]);
}

export default initialState => {
  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleweare))
  );
  const runSaga = () => {
    sagaMiddleware.run(rootSaga);
  };
  return { store, runSaga };
};
