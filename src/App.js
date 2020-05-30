import React from 'react';
import './App.css';
import {StoreContext} from "./utils/store";


const App = (  ) => {
  const {
    ["events"]: [events, setEvents],
  } = React.useContext(StoreContext);
  console.log(events);



return(
  
  <div>

  </div>
 
)
}
export default App
