import { connect } from "react-redux"
import CalculatorUi from "../presentational/calculatorPresentational"
import clearAction from "../redux/action/clearAction";
import evaluateAction from "../redux/action/evaluateAction";
import originalInputAction from "../redux/action/originalinputAction";
import clickSound  from "../assets/minimal-pop-click-ui-1-198301.mp3"

const audio = new Audio()
    audio.src=clickSound;
     const buttonClickSound=()=>{
        audio.currentTime=0;
        audio.play()
     }
   
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
              buttonClickSound()
               
          },
          handleAssignmentClick:(data)=>{ 
          
               dispatch(originalInputAction(data))
              buttonClickSound()

          },

          handleEqualClick:(data)=>{
               dispatch(evaluateAction(data))
              buttonClickSound()

          },
          handleNumberClick:(data)=>{
          
               dispatch(originalInputAction(data))
              buttonClickSound()


          }
     }
       
  )

export default connect(mapStateToProps,mapDispatchToProps)(CaculatorComponent);