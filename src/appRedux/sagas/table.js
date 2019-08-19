import {
    all,
    call,
    fork,
    put,
    takeEvery,
    actionChannel
  } from "redux-saga/effects";
  import {tableDataRecv} from '../action/index'

  const GET_TABLE_DATA_REQ = "GET_TABLE_DATA_REQ";



  function* tableCall(action) {
    try {
      const tableData = yield fetch("http://localhost:3005/upload",{
        method:"POST",
        body:(action.payload),
      })
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


  export function* uploadFile() {
    yield takeEvery(GET_TABLE_DATA_REQ, tableCall);
  }
  

  export default function* rootSaga() {
    yield all([fork(uploadFile)]);
  }