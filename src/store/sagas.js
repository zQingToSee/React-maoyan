import { put, takeEvery, call } from "redux-saga/effects";
import axios from "axios";

function* addFn(action) {
  yield put({
    // put用来调用reducer函数的
    type: "add",
    payload: action.payload,
  });
}
function* removeFn(action) {
  yield put({
    type: "remove",
    id: action.id,
  });
}
function* loadFn(action) {
  // call 用来做数据请求的
  const data = yield call(() => {
    return axios(
      "https://www.fastmock.site/mock/15579798b9f988acd4d04ff978a2bd7c/api/list"
    ).then((res) => {
      return res.data;
    });
  });
  yield put({
    type: "init",
    data: data,
  });
}

/*
  在每个 `USER_FETCH_REQUESTED` action 被 dispatch 时调用 fetchUser
  允许并发（译注：即同时处理多个相同的 action）
*/
function* mySaga() {
  yield takeEvery("add2", addFn);
  yield takeEvery("remove2", removeFn);
  yield takeEvery("load", loadFn);
}

export default mySaga;
