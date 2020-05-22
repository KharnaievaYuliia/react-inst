import React from 'react';



  const Dz23 = ({person, setPerson})=>{

    const change = (e)=>{
      setPerson(e.target.value);
    }
  
  return(
    <>
      <input type="text" value={person} onChange={ e=> change(e) }/>
    </>
  )
}

 
export default Dz23;