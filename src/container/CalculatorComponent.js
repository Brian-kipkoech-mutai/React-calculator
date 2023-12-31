import { connect } from "react-redux"
import CalculatorUi from "../presentational/calculatorPresentational"
import inputAction from "../redux/action/inputAction"
import clearAction from "../redux/action/clearAction";
import evaluateAction from "../redux/action/evaluateAction";


   
const CaculatorComponent=( {handleAcClick,handleAssignmentClick,handleNumberClick,handleEqualClick,input,evaluated})=>{
console.log('component',input);
     return(
    <CalculatorUi
    handleAcClick={handleAcClick}
    handleAssignmentClick={handleAssignmentClick}
    handleNumberClick={handleNumberClick}
    handleEqualClick={handleEqualClick}
    input={input}
    evaluated={evaluated}
    
    
    />
     )

}
  const mapStateToProps=(state)=>(
     {

     input:state.inputReducer.input,
     evaluated:state.inputReducer.evaluated
     
     }
  )

  const mapDispatchToProps=(dispatch)=>(
     {
          handleAcClick:(data)=>{
              dispatch(clearAction(data)) 
          },
          handleAssignmentClick:(data)=>{
               dispatch(inputAction(data))
          },
          handleEqualClick:(data)=>{
               dispatch(evaluateAction(data))
          },
          handleNumberClick:(data)=>{
               dispatch(inputAction(data))
          }
     }
       
  )

export default connect(mapStateToProps,mapDispatchToProps)(CaculatorComponent);