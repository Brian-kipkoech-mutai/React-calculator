
import { EVALUATE, INPUT } from "../action/action.type"
import { CLEAR } from "../action/action.type";

 const  defaultState={
    input:[],
    evaluated:''
 }


const inputReducer=( state=defaultState,action)=>{

    switch(action.type){
        
        case INPUT:
            let newInput = [...state.input];
          
            if (action.payload === '*' || action.payload === '/') {
              const lastChar = newInput.length > 0 ? newInput[newInput.length - 1] : '';
              if((action.payload==='*'||action.payload==='/')&&(newInput[newInput.length - 1]==='-'||newInput[newInput.length - 1]==='+')
              
              &&(newInput[newInput.length - 2]==='/'||newInput[newInput.length - 2]==='*')
              ){
                 return state
              }
              if(action.payload==='*'&& newInput[newInput.length-1]==='/'){
                newInput[newInput.length - 1] = action.payload;
                
              }
              if(action.payload==='/'&& newInput[newInput.length-1]==='*'){
                newInput[newInput.length - 1] = action.payload;
            } 
          
              if (lastChar !== '+' && lastChar !== '-' && lastChar !== '*' && lastChar !== '/') {
              
                newInput.push(action.payload);
              } else if (lastChar === '+' || lastChar === '-') {
                
                newInput[newInput.length - 1] = action.payload;
              }
            } else if (action.payload === '+' || action.payload === '-') {
              if (
                newInput.length > 0 &&
                (newInput[newInput.length - 1] === '+' || newInput[newInput.length - 1] === '-')
              ) {
                newInput.pop(); 
              }
              newInput.push(action.payload);
            } else if (!isNaN(action.payload)) {
              newInput.push(action.payload); 
            }
          
            return {
              ...state,
              input: newInput
            };
          
        case CLEAR:
             return{
                ...state,input:action.payload,evaluated:''
             }
         case EVALUATE:
            if(typeof(state.input[state.input.length-1])==='number'){
             return {
                ...state,evaluated:[eval(action.payload)]
               } 
            };
          
        default:
            return state
    }
     
}

export default inputReducer;