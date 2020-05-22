import React from "react";
import ClubInfo from "./info";
import Achievement from "./achievement";
import Player from "./player";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import { grey } from "@material-ui/core/colors";
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
   root: {
      backgroundColor: "lightgrey",
      flexDirection: "column",
      "& .players-table": {
         backgroundColor: "darkgrey",
         padding: "20px",
         width: "100%"

      }
   },
});

const Cw2 = ({ clubData }) => {
   const classes = useStyles();
   const { info, achievements, players } = clubData;
   const [input1,setInput1]=React.useState("Yuliia");
   const handleSubmitForm = (e)=>{
      e.preventDefault();
      console.log(e.target);
      setInput1("");
   };
   return (

      <Router>
         <Grid container className={classes.root} direction="row">
            <Grid item md={6}>
               <ul>
                  <li>
                     <Link to="/">Info</Link>
                  </li>
                  <li>
                     <Link to="/achievements">Achievements</Link>
                  </li>
                  <li>
                     <Link to="/players">Players</Link>
                  </li>
               </ul>
            </Grid>
            <Switch>
               <Route path="/players">
                  <Grid item md={6}>
                     <table className="players-table">
                        <tbody>
                           {players.map((item, index) => {
                              return <Player playerInfo={item} key={index} />;
                           })}
                        </tbody>
                     </table>
                  </Grid>
               </Route>
               <Route path="/achievements">
                  <Grid item>
                     <h2>Avievements</h2>
                     {achievements.map((item, index) => {
                        return <Achievement key={index} achievement={item} />;
                     })}
                  </Grid>
               </Route>
               <Route path="/">
                  <Grid item>
                     <h2>Club Info</h2>
                     <ClubInfo info1={info} />
                  </Grid>
               </Route>
            </Switch>
            <Grid item>
               <form>
                  <TextField value={input1} type="text" label="name" name="user_name"/>
                  <TextField type="text" label="surname" name="user_surname"/>
                  <button type="submit" onClick={handleSubmitForm}>das</button>
               </form>

            </Grid>
         </Grid>
      </Router>

   );
};
export default Cw2