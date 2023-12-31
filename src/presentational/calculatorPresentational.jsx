

const CalculatorUi=({handleAcClick,handleAssignmentClick,handleNumberClick,handleEqualClick,input,evaluated})=>{
     console.log(input);
      const answer=input.join('')  
      console.log('ans',answer);
    return(

        <div className="app">  
        <div className="title">React calculator</div>
          <div className="outerDiv">
            
            <div className="display">
               <div style={{color:"white",marginRight:'8px'}} className="displayDiv"> 
                <div className="topOutput">{input}{evaluated.length>0&&eval(input)===evaluated?( `=${evaluated}`):''}</div>
                <div className="bottomOutput">  {evaluated.length>0?evaluated:input}</div>
               </div>
            </div>
            <div className="buttonBox">
            <div className="mainDiv1">

            <div className="buttons" style={{width:'142px', backgroundColor:'rgb(226, 59, 59)'}}
            
            onClick={()=>handleAcClick([])}
            >ac</div>

            <div className="buttons"  onClick={()=>handleAssignmentClick('/')}>/</div>
            <div className="buttons" onClick={()=>handleAssignmentClick('*')}>x</div>

           </div>

           <div className="mainDiv2">

           <div className="numbers" onClick={()=>handleNumberClick(7)}>7</div>
            <div  className="numbers" onClick={()=>handleNumberClick(8)}>8</div>
            <div  className="numbers" onClick={()=>handleNumberClick(9)}>9</div>
            <div className="buttons" onClick={()=>handleAssignmentClick('-')}>-</div>


           </div>

           <div className="mainDiv3">

           <div  className="numbers" style={{borderBottom:"none"}}  onClick={()=>handleNumberClick(4)}>4</div>
            <div className="numbers" onClick={()=>handleNumberClick(5)}>5</div>
            <div  className="numbers" onClick={()=>handleNumberClick(6)}>6</div>
            <div className="buttons" onClick={()=>handleAssignmentClick('+')}>+</div>

           </div>

           <div className="mainDiv4">

           <div className="numbers">
            <div  className="numbers" style= {{height:"50%" ,borderTopStyle:"none" , borderBottomStyle:"none", borderLeft:"none"} }
             
             onClick={()=>handleNumberClick(1)}
            >1</div>
            <div  className="numbers" style= {{height:"50%" ,width:'142PX',borderLeft:"none"}}
            onClick={()=>handleNumberClick(0)}
            >0</div>
           </div>
            <div  className="numbers" style={{height:"49%"  }}
            
            onClick={()=>handleNumberClick(2)}
            >2</div>
            <div className="numbers">
                 <div  className="numbers" style={{height:"50%" ,borderTopStyle:"none", borderLeft:"none"}}
                 onClick={()=>handleNumberClick(6)}
                 >3</div>
                <div  className="numbers" style={{height:"50%" ,borderTopStyle:"none", borderLeft:"none"}}
                
                onClick={()=>handleAssignmentClick('.')}
                >.</div>
            </div>
            <div className="buttons" style={{backgroundColor:'rgb(78, 78, 235)'}}
            
            onClick={()=>handleEqualClick(answer)}
            >=</div>

           </div>

            </div>

          </div>
          <div  className="developer"> Design and coded by <a href="https://www.linkedin.com/in/brian-kipkoech-71b5b9248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9nnAF3gTQq2oeiliYkWdyA%3D%3D">Brian kipkoech</a></div>

        </div>
    )
}

export default CalculatorUi;