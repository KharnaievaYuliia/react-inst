import React from "react";
import { withRouter } from "react-router-dom";
import { Box, Paper } from "@material-ui/core/";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles({

    link: {
        textDecoration: 'none',
        padding: '10px',

    },
    div: {
        backgroundColor: '#c97594',
        color: '#471125',
        padding: '5px 15px',
        margin: '20px 5px',
        textAlign: 'center',
        boxShadow: '0 0 10px rgba(0,0,0,0.5)',
        borderRadius: '7px',
    },
    img: {
        width: '200px',
        margin: '20px',
    }
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
                                <p> <img className={classes.img} src={product.img} alt="foto" />  </p>
                            </Box>
                        </Link>
                    )
                })
            }
        </>
    )
}
export default withRouter(ProductsPage);