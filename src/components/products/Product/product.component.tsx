import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import React from 'react';

import { iProduct } from '../../../services/ProductsMock/products.mocks';
import useStyles from './product.style';


interface ProductProps
{
    product: iProduct;
}


const Product = ({ product: { id, name, description, price, image } }: ProductProps) =>
{
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent>
                <div className="classes.CardContent">
                    <Typography variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant='h5' >
                        {price}
                    </Typography>
                </div>
                <Typography variant='body2' color='textSecondary' >
                    {description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart">
                    {/* <AddShoppingCard /> */}
                </IconButton>
            </CardActions>
        </Card>
    )
}


export default Product