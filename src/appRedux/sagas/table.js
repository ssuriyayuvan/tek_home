import {
    all,
    call,
    fork,
    put,
    takeEvery
  } from "redux-saga/effects";
  import {tableDataRecv} from '../action/index'

  const GET_TABLE_DATA_REQ = "GET_TABLE_DATA_REQ";
  const TABLE_DATA_RECV = "TABLE_DATA_RECV";



  function* tableCall() {
    try {
      const tableData = yield fetch("http://localhost:3005/upload")
        .then(response => response.json())
        .catch(error => error);
      if (tableData) {
        yield put(tableDataRecv(tableData));
      }else{
      }
    } catch (error) {
      console.log(error);
    }
  }

  function* getCall() {
    try {
      const tableData = yield fetch("http://localhost:3005/")
        .then(response => response.json())
        .catch(error => error);
      if (tableData) {
        console.log(tableData)
        // yield put(tableDataRecv(tableData));
      }else{
      }
    } catch (error) {
      console.log(error);
    }
  }

  export function* uploadFile() {
    yield takeEvery(TABLE_DATA_RECV, tableCall);
  }
  
  export function* testCall() {
    yield takeEvery(GET_TABLE_DATA_REQ, getCall);
  }

  export default function* rootSaga() {
    yield all([fork(uploadFile),fork(testCall)]);
  }