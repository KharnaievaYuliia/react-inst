import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
    },
});

const Dz3 = () => {
    const classes = useStyles();
    return (
        <Router>

            <Grid container direction="row" className={classes.root}>
                <div className="title">Cherkassy</div>
                <ul>
                    <li>
                        <Link to="/main" className="li">General data</Link>
                    </li>
                    <li>
                        <Link to="/place" className="li">Famous place</Link>
                    </li>
                    <li>
                        <Link to="/attractions" className="li">Attractions</Link>
                    </li>
                    <li>
                        <Link to="/photos" className="li">City photos</Link>
                    </li>
                </ul>


                <img src="./dz3/main.jpg" className="foto" alt="main" />

                <Switch>

                    <Route path="/place">

                        <Place />

                    </Route>

                    <Route path="/attractions">

                        <Attractions />

                    </Route>

                    <Route path="/photos">

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