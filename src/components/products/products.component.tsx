import { Grid } from '@material-ui/core';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { productsAtom } from '../../atoms/products.atom';
import { Product } from './Product/product.component';
import useStyles from './products.styles';




export const Products: FC = () => {
  const classes = useStyles();
  const products = useRecoilValue(productsAtom);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => {
          
          return (
          <Grid item key={product.id} xs={12} sm={6} md={4}>
            <Product product={product} />
          </Grid>
        )})}
      </Grid>
    </main>
  );
};
