import { EVALUATE } from "./action.type"




 const  evaluateAction=(data)=>{
    return{
        type :EVALUATE,
        payload:data

    }
 }
 export default evaluateAction