import React from 'react';




  const Dz23 = ({person, setPerson})=>{

    const change = (e)=>{
      setPerson(e.target.value);
    }
  
  return(
    <>
    
     <p> <input type="text" value={person} onChange={ e=> change(e) }/></p>
     <p> <input type="text" value={person} onChange={ e=> change(e) }/></p>
    </>
  )
}

 
export default Dz23;