import React from "react";
import { withRouter } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import { Box, Paper } from "@material-ui/core";

const useStyles = makeStyles({

    img: {
        width: '400px',
        margin: '15px',
        padding: '5px',
    },
    name: {
        textAlign: 'center',
        paddingTop: '10px',
    },
    price: {
        textAlign: 'center',
        paddingBottom: '10px',
    }
});

const ProductInfo = (props) => {
    const productName = props.match.params.category;
    const { products } = props;

    const currentCategory = products.find(product => product.name === productName);
    const currentProducts = currentCategory.products;


    const classes = useStyles();

    return (
        <div>
            {
                currentProducts.map((product) => {
                    return (
                        <>
                            <Box component={Paper} key={product.id}>
                                <p className={classes.name}>{product.name}</p>
                                <p> <img className={classes.img} src={product.img} alt="foto" />  </p>
                                <p className={classes.price}>{product.price}</p>
                            </Box>
                        </>
                    )
                })
            }
        </div>
    )
}

export default withRouter(ProductInfo);