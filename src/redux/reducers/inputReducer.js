



import { CLEAR } from "../action/action.type";
import { ORIGINALINPUT,EVALUATE } from "../action/action.type";

 const  defaultState={
    filterd:[],
    originalInput: [],
    evaluated:''
 }

   
const inputReducer=( state=defaultState,action)=>{

    switch(action.type){

      case ORIGINALINPUT:
        let newInputValue = [...state.originalInput];
         if(action.payload===0){
          if(newInputValue.length===1 && newInputValue[newInputValue.length-1]===0){
            newInputValue= [action.payload]
          
          }
          else{
            newInputValue.push(action.payload)
            }
          
         }
         else if(action.payload==='.'){
           
            let splited=newInputValue.join().split(/[+*\-/]/)
          if(splited[splited.length-1].includes(action.payload)){
            return{...state}
          }
          else{
            newInputValue.push(action.payload);
          }
          
        }
         else{
          newInputValue.push(action.payload);    
         }
         return{
           ...state,originalInput:newInputValue,

           
         }
           
          
        case CLEAR:
             return{
                ...state,
                input:action.payload ,
                 originalInput:action.payload,
                 evaluated:action.payload
             }
         case EVALUATE:
            if(typeof(state.originalInput[state.originalInput.length-1])==='number'){
             return {
                ...state,evaluated:[eval(action.payload)],
                originalInput:[eval(action.payload)]
                  
               } 
            };
          
        default:
            return state
    }
     
}

export default inputReducer;