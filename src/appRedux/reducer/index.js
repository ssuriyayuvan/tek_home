import {combineReducers} from 'redux';
import tableData from './table'

const reducers = combineReducers({
    table:tableData
})


export default reducers;