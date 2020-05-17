import React from 'react';
import './App.css';
import Cw2 from "./Components/cw2"
const App = ( {name} ) => {
return(
  <div>
<h1>Hello world!!!</h1>
<p>Your name {name} </p>
<Cw2 date={ new Date() }/>
  </div>
  
);
}
export default App
