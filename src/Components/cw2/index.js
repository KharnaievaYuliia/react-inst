import React from "react";
import ClubInfo from "./info";
import Achievement from "./achievement";
import Player from "./player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";



const Cw2 = ({ clubData }) => {
   const { info, achievements, players } = clubData;
   return (

      <Router>
         <ul>
            <li>
               <Link to="/"> Info</Link>
            </li>
            <li>
               <Link to="/achievements"> Achievements</Link>
            </li>
            <li>
               <Link to="/players"> Players</Link>
            </li>
         </ul>
         <Switch>
            
            <Route path="/achievements">
               <h2>Achivements</h2>
               {
                  achievements.map((item, index) => {
                     return <Achievement key={index} achievement={item} />
                  })
               }
            </Route>
            <Route path="/players">
               <table>

                  <tbody>
<Route path="/">
<h2>Club Info</h2>
<ClubInfo info={info} />
</Route>
                     {
                        players.map((item, index) => {
                           return <Player playerInfo={item} key={index} />
                        }
                        )
                     }
                  </tbody>
               </table>
            </Route>
         </Switch>
      </Router>
   );
};
export default Cw2