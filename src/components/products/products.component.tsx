import { Grid } from '@material-ui/core';
import React from 'react';

import { iProduct } from '../../models/product.model';
import Product from './Product/product.component';
import useStyles from './products.styles';

interface ProductsProps
{
   products: iProduct[];
}

export const Products = ({ products }: ProductsProps) =>
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

