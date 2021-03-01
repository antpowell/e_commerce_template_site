import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React, { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { TexasIcon } from '../../assets';
import { cartAtom } from '../../services/Cart/cart.service';
import { emptyCart } from '../../services/commerce/commerce.service';
import useStyles from './navBar.styles';

export const NavBar: FC = () => {
    const classes = useStyles();
    const cartCount: number = useRecoilValue(cartAtom)?.total_items;
    console.log({ cartAtom });
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={TexasIcon} alt="Commerce.js" height="25px" className={classes.image} />
                        NOT FOR PRODUCTION
                        <div className={classes.grow} />
                        <div className="">
                            <IconButton
                                aria-label="Show cart itmes"
                                color="inherit"
                                onClick={() => {
                                    emptyCart();
                                }}
                            >
                                <Badge badgeContent={cartCount} color="secondary">
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};
