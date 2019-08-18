const GET_TABLE_DATA_REQ = "GET_TABLE_DATA_REQ"
const TABLE_DATA_RECV = "TABLE_DATA_RECV"

export const getTableDataReq = ()=>{
    return{
        type:GET_TABLE_DATA_REQ
    }
}

export const tableDataRecv = (data)=>{
    return{
        type:TABLE_DATA_RECV,
        payload:data
    }
}
