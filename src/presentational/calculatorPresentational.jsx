

const CalculatorUi=({handleAcClick,handleAssignmentClick,handleNumberClick,handleEqualClick,evaluated,originalInput})=>{
    
     const filterd =[]

      let answer=originalInput
      let trimed= answer.filter((element)=>element!==' ')
      for(let i=0;i<trimed.length;i++){
        if(!isNaN(trimed[i])){
         filterd.push(trimed[i])
        }
        else if(trimed[i]==='-'&& !isNaN(trimed[i+1])){
          filterd.push(trimed[i])
        }
        else if(isNaN(trimed[i])&&(!isNaN(trimed[i+1])||trimed[i+1]==='-')&& !isNaN(trimed[i+2])){
        filterd.push(trimed[i])
        }
        else if( isNaN(trimed[i])&& !isNaN(trimed[i+1]))
        filterd.push(trimed[i])
      }
      let joined=filterd.join('')
          
      console.log('filterd',filterd);
       

      console.log('ans',answer);
      console.log('defaultLength:',originalInput.length);
     console.log('original',originalInput);
    return(

        <div className="app">  
        <div className="title">React calculator</div>
          <div className="outerDiv">
            
            <div className="displayBox">
               <div style={{color:"white",marginRight:'8px'}} className="displayy" > 
                <div className="topOutput"    > {originalInput}  </div>
                <div className="bottomOutput"  id="display" > 
                {originalInput.length<1?0:evaluated.length<1?originalInput:evaluated }
                
                 </div>
               </div>

            </div>
            <div className="buttonBox">
            <div className="mainDiv1">

            <div className="buttons" style={{width:'142px', backgroundColor:'rgb(226, 59, 59)'}}
            
            onClick={()=>handleAcClick([])}
            id="clear">ac</div>

            <div className="buttons"  onClick={()=>handleAssignmentClick('/')}id="divide">/</div>
            <div className="buttons" onClick={()=>handleAssignmentClick('*')} id="multiply">x</div>

           </div>

           <div className="mainDiv2">

           <div className="numbers" onClick={()=>handleNumberClick(7)}id="seven">7</div>
            <div  className="numbers" onClick={()=>handleNumberClick(8)}id="eight">8</div>
            <div  className="numbers" onClick={()=>handleNumberClick(9)}id="nine">9</div>
            <div className="buttons" onClick={()=>handleAssignmentClick('-')} id="subtract">-</div>


           </div>

           <div className="mainDiv3">

           <div  className="numbers" style={{borderBottom:"none"}}  onClick={()=>handleNumberClick(4)}id="four">4</div>
            <div className="numbers" onClick={()=>handleNumberClick(5)} id="five">5</div>
            <div  className="numbers" onClick={()=>handleNumberClick(6)}id="six">6</div>
            <div className="buttons" onClick={()=>handleAssignmentClick('+')}  id="add">+</div>

           </div>

           <div className="mainDiv4">

           <div className="numbers">
            <div  className="numbers" style= {{height:"50%" ,borderTopStyle:"none" , borderBottomStyle:"none", borderLeft:"none"} }
             
             onClick={()=>handleNumberClick(1)}
             id="one">1</div>
            <div  className="numbers" style= {{height:"50%" ,width:'142PX',borderLeft:"none"}}
            onClick={()=>handleNumberClick(0)}
            id="zero">0</div>
           </div>
            <div  className="numbers" style={{height:"49%"  }}
            
            onClick={()=>handleNumberClick(2)}
            id="two">2</div>
            <div className="numbers">
                 <div  className="numbers" style={{height:"50%" ,borderTopStyle:"none", borderLeft:"none"}}
                 onClick={()=>handleNumberClick(3)}
                 id="three">3</div>
                <div  className="numbers" style={{height:"50%" ,borderTopStyle:"none", borderLeft:"none"}}
                
                onClick={()=>handleNumberClick('.')}
                id="decimal">.</div>
            </div>
            <div className="buttons" style={{backgroundColor:'rgb(78, 78, 235)'}}
            
            onClick={()=>handleEqualClick(joined)}
            id="equals">=</div>

           </div>

            </div>

          </div>
          <div  className="developer"> Design and coded by <a href="https://www.linkedin.com/in/brian-kipkoech-71b5b9248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9nnAF3gTQq2oeiliYkWdyA%3D%3D">Brian kipkoech</a></div>

        </div>
    )
}

export default CalculatorUi;