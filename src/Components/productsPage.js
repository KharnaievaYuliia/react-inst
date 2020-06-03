import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Paper } from "@material-ui/core/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';


const useStyles = makeStyles({

    link: {
        textDecoration: 'none',
        padding: '30px',
    },
    div: {
        backgroundColor: '#c97594',
        color: '#471125',
        padding: '0px 15px',
    },

});


const ProductsPage = (props) => {

    const categoryName = props.match.params.path;
    const { products } = props;
    const currentCategory = products.find(product => product.name === categoryName);
    const currentProducts = currentCategory.products;
    const handleClick = (id) => {
        props.history.push(`/${currentCategory.name}/${id}`);
    };

    const classes = useStyles();
    return (
        <>
            {
                currentProducts.map((product) => {
                    return (
                        <Link className={classes.link} to={`/${currentCategory.name}/${product.id}`}>
                            <Box className={classes.div} component={Paper} key={product.id}>
                                <p>{product.name}</p>
                              
                            </Box>
                        </Link>
                    )
                })
            }
        </>
    )
}
export default withRouter(ProductsPage);