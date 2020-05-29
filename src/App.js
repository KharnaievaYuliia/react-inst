import React,{useEffect} from 'react';
import './App.css';
import {getAlbumId,getAlbumImages} from "./utils/API";

const App = (  ) => {
  const [ albumIdArray,setAlbumIdArray] = React.useState();
 const [albumWithImagesArray,setAlbumWithImagesArray]
useEffect(()=>{
getAlbumId()
.then((res)=>setAlbumIdArray(res.data.data));
},[]);
useEffect(()=>{
let images = [];

},[albumIdArray]);
return(
  <div>

  </div>
  
)
}
export default App
