import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import React, { FC } from 'react';
import { useSetRecoilState } from 'recoil';

import { cartAtom, handleAddToCart } from '../../../services/Cart/cart.service';
import { iProduct } from '../../../types/products';
import useStyles from './product.style';

export interface ProductProps {
    product: iProduct;
}

export const Product: FC<ProductProps> = ({ product }: { product: iProduct }) => {
    const classes = useStyles();
    const setCartAtom = useSetRecoilState(cartAtom);
    // const useSetCart = useSetRecoilState(cartAtom);

    // const addToCart = (newCart: iCart | null, product: iProduct) => {
    //     console.log('adding to cart', product.name);
    //     useSetCart(newCart);
    // };

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={product?.media?.source} title={product?.name} />
            <CardContent>
                <div className="classes.CardContent">
                    <Typography variant="h5" gutterBottom>
                        {product?.name}
                    </Typography>
                    <Typography variant="h5">{product?.price?.formatted_with_symbol}</Typography>
                </div>
                <Typography variant="body2" color="textSecondary">
                    {product?.description?.replace(/(?:<p>)|(?:<\/p>)/g, '')}
                </Typography>
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton
                    aria-label="Add to Cart"
                    onClick={async () => {
                        setCartAtom(await handleAddToCart(product.id, 1));
                        // console.log(await commerce.cart.add(product.id, 1));
                        // handleAddToCart(product?.id, 1);
                    }}
                >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};
