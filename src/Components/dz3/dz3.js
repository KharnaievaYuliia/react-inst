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
        backgroundColor: "SteelBlue",
        "& .title": {
            color: "darkgrey",
            fontSize: "45px",
            marginLeft: "35px"
        },
        "& li": {
            listStyleType: "none",
            display: "inline",
            marginRight: "35px",

        },

        "& .li": {
            textDecoration: "none",
            color: "#fff",
            fontSize: "30px",
            paddingTop: "20px"

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
                            <Link to="/main" className="li">Information about Cherkassy</Link>
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
            </Grid>

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

        </Router>
    );
}

export default Dz3;