import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Main from './main.js';
import Place from './place.js';
import Attractions from './attractions.js';
import Photos from './photos.js';

const useStyles = makeStyles({
    root: {
        backgroundColor: "white",
        "& .title": {
            color: "FireBrick",
            fontSize: "65px",
            marginLeft: "35px",
            fontWeight: "bold"
        },
        "& li": {
            listStyleType: "none",
            display: "inline",
            marginRight: "35px",

        },

        "& .li": {
            textDecoration: "none",
            color: "darkblue",
            fontSize: "30px",
        },
        "& ul": {
            paddingTop: "15px"
        },
        "& .foto": {
            width: "100%",
            height: "80vh",
        },
        "& .textfield": {
            marginLeft: "35px",
            marginTop:"30px",
        },
        "& .but": {
            padding: "15px 55px",
            fontSize: "20px",
            borderRadius: "5px",
            border:"1px solid grey",
            marginTop:"25px",
            marginLeft: "35px",
        },
    },
});

const Dz3 = () => {
    const classes = useStyles();
    return (
        <Router>

            <Grid container direction="row" className={classes.root}>
                <div className="title">Cherkasy</div>
                <ul>
                    <li>
                        <Link to="/main" className="li">General data /</Link>
                    </li>
                    <li>
                        <Link to="/place" className="li">Famous place /</Link>
                    </li>
                    <li>
                        <Link to="/attractions" className="li">Attractions /</Link>
                    </li>
                    <li>
                        <Link to="/photos" className="li">City photos /</Link>
                    </li>
                </ul>


                <img src="./dz3/cherkassy.jpg" className="foto" alt="main" />

                <Switch>

                    <Route path="/place">

                        <Place />

                    </Route>

                    <Route path="/attractions">

                        <Attractions />

                    </Route>

                    <Route path="/photos">
                    <form className={classes.root} >
                    <TextField className="textfield" type="text" label="surname" name="surname" />
                    <TextField className="textfield" type="password" label="password" name="password" />
                    <TextField className="textfield" type="email" label="email" name="email" />
                    <TextField className="textfield" type="photo" label="photo" name="photo" />
                    <button className="but" type="submit">submit</button>
                </form>
                        <Photos />

                    </Route>


                    <Route path="/main">

                        <Main />

                    </Route>

                </Switch>

              

            </Grid>
        </Router>
    );
}

export default Dz3;