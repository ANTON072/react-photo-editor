import { createAction } from 'redux-actions';
import produce from 'immer';
import { call, fork, put, take, all } from 'redux-saga/effects';

/*==================================
Actions
==================================*/
const COUNT = 'counter/count';
const ASYNC_COUNT = 'counter/asyncCount';

/*==================================
Action Creators
==================================*/
export const actions = {
  // count: createAction(COUNT, num => num, (num, key) => ({ key: key })),
  // asyncCount: createAction(
  //   ASYNC_COUNT,
  //   num => num,
  //   (num, key) => ({ key: key })
  // )
};

/*==================================
Saga
==================================*/
function* asyncCountSaga() {
  while (true) {
    // const { payload, meta } = yield take(ASYNC_COUNT);
    // yield helpers.delay(1000);
    // yield put(actions.count(payload, meta));
  }
}

export function* photoSaga() {
  yield all([fork(asyncCountSaga)]);
}

/*==================================
Initial State
==================================*/
const initialState = {
  order: [],
  photos: {}
};

/*==================================
Reducer
==================================*/
export default function reducer(state = initialState, action = {}) {
  return produce(state, draft => {});
}
