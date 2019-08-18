const GET_TABLE_DATA_REQ = "GET_TABLE_DATA_REQ";
const TABLE_DATA_RECV = "TABLE_DATA_RECV";

const init_state = {}

export default(state=init_state,action)=>{
    switch (action.type) {
        case GET_TABLE_DATA_REQ:
            return {...state}
        case TABLE_DATA_RECV:
            return{...state,data:action.payload}
        default:
            return state
    }
}