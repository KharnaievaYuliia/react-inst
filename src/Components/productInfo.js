import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';


const useStyles = makeStyles({

    p: {
        margin: '30px',
    },
});

const ProductInfo = (props) => {
const classes = useStyles();

    return (
        <div className={classes.p}>
            <h3>Информация</h3>
          
        </div>
    )
}

export default withRouter(ProductInfo);