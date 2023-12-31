import { INPUT } from "./action.type";


  const inputAction=(data)=>{
    return{
        type:INPUT,
        payload:data
    }
  }


  export default inputAction;
  