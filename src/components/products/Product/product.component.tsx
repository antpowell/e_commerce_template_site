import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React from 'react';

import { iProduct } from '../../../models/product.model';
import { useAddToCart } from '../../../services/Cart/cart.service';
import useStyles from './product.style';

interface ProductProps {
    product: iProduct;
}

const Product = (
    {
        product: {
            id,
            name,
            description,
            price: { formatted_with_symbol },
            media: { source },
        },
    }: ProductProps,
    onAddToCart?: () => {},
) => {
    const classes = useStyles();

    const addToCart = useAddToCart(id, 1);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={source} title={name} />
            <CardContent>
                <div className="classes.CardContent">
                    <Typography variant="h5" gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant="h5">{formatted_with_symbol}</Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {description.replace(/(?:<p>)|(?:<\/p>)/g, '')}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                    aria-label="Add to Cart"
                    onClick={() => {
                        addToCart;
                    }}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
