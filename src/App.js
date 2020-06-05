import React from 'react';
import './App.css';
import { StoreContext } from "./utils/store";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles, CssBaseline, Grid } from '@material-ui/core';
import ProductsPage from "./Components/productsPage";
import ProductInfo from "./Components/productInfo";

const useStyles = makeStyles({
  root: {
    width: '1200px',
    margin: '0 auto',
    fontSize: '30px',
    fontWeight: 'bold',

  },
  header: {
    display: 'flex',
    backgroundColor: '#661634',
    width: '1300px',
  },
  link: {
    textDecoration: 'none',
    padding: '30px',
    color: 'white',
  },

});

const App = () => {
  const {
    ["products"]: [products, setProducts],
  } = React.useContext(StoreContext);
  console.log(products);

  const classes = useStyles();
  return (

    <div className={classes.root}>
      <CssBaseline />
      <Grid container>
        <Router>
          <nav className={classes.header}>
            {
              products.map((product) => {
                return <p key={product.id}>
                  <Link className={classes.link} to={`/${product.name}`}>{product.name}</Link> </p>
              })
            }
          </nav>
          <Switch>

            <Route path="/:category/:productId">
              <ProductInfo products={products} />
            </Route>
            <Route path="/:path">
              <ProductsPage products={products} />
            </Route>
            <Route path="/">
            </Route>
          </Switch>
        </Router>
      </Grid>
    </div>

  )
}
export default App;