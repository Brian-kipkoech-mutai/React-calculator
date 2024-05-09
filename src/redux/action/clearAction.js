import { CLEAR } from "./action.type"


const clearAction=(data)=>{
    return{
        type:CLEAR,
        payload:data
    }
}

export default clearAction