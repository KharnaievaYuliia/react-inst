import React,{useState} from 'react';

const styles = {
    div:{
        padding:"5px",
        fontSize:"18px",
        borderRadius:"5px",
        border:"1px solid grey"
    }
  }

const OwndataInput = ({title, text, change})=> {
    return (
        <>
        <p>{title}</p>
        <input style={styles.div} type="text" onChange={(e)=>{change(e)}} value={text}/>
        </>
    );
}

export default OwndataInput;