const GET_TABLE_DATA_REQ = "GET_TABLE_DATA_REQ"
const TABLE_DATA_RECV = "TABLE_DATA_RECV"

export const getTableDataReq = (data)=>{
    console.log(data)
    return{
        type:GET_TABLE_DATA_REQ,
        payload:data
    }
}

export const tableDataRecv = (data)=>{
    return{
        type:TABLE_DATA_RECV,
        payload:data
    }
}
