import { Grid } from '@material-ui/core';
import React from 'react';

import { products } from '../../services/ProductsMock/products.mocks';
import Product from './Product/product.component';
import useStyles from './products.styles';



export const Products = () =>
{
   const classes = useStyles();

   return (
      <main className={classes.content}>
         <div className={classes.toolbar} />
         <Grid container justify='center' spacing={4}>
            {
               products.map((product) => (
                  <Grid item key={product.id} xs={12} sm={6} md={4} >
                     <Product product={product} />
                  </Grid>
               ))
            }
         </Grid>
      </main>
   )
}

