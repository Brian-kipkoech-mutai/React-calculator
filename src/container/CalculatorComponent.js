import { connect } from "react-redux"
import CalculatorUi from "../presentational/calculatorPresentational"
import clearAction from "../redux/action/clearAction";
import evaluateAction from "../redux/action/evaluateAction";
import originalInputAction from "../redux/action/originalinputAction";


   
const CaculatorComponent=( {handleAcClick,handleAssignmentClick,handleNumberClick,handleEqualClick,evaluated,originalInput})=>{

     return(
    <CalculatorUi
    handleAcClick={handleAcClick}
    handleAssignmentClick={handleAssignmentClick}
    handleNumberClick={handleNumberClick}
    handleEqualClick={handleEqualClick}
    
    evaluated={evaluated}
    originalInput={originalInput}
    
    
    />
     )

}
  const mapStateToProps=(state)=>(
     {

     
     evaluated:state.inputReducer.evaluated,
     originalInput:state.inputReducer.originalInput
     
     }
  )

  const mapDispatchToProps=(dispatch)=>(
     {
          handleAcClick:(data)=>{
              dispatch(clearAction(data)) 
          },
          handleAssignmentClick:(data)=>{ 
          
               dispatch(originalInputAction(data))
          },

          handleEqualClick:(data)=>{
               dispatch(evaluateAction(data))
          },
          handleNumberClick:(data)=>{
          
               dispatch(originalInputAction(data))

          }
     }
       
  )

export default connect(mapStateToProps,mapDispatchToProps)(CaculatorComponent);