import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';

import { TexasIcon } from '../../assets';
import useStyles from './navBar.styles';

export const NavBar = () => {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="fixed" className={classes.appBar} color="inherit">
                <Toolbar>
                    <Typography variant="h6" className={classes.title} color="inherit">
                        <img src={TexasIcon} alt="Commerce.js" height="25px" className={classes.image} />
                        NOT FOR PRODUCTION
                        <div className={classes.grow} />
                        <div className="">
                            <IconButton aria-label="Show cart itmes" color="inherit">
                                <Badge badgeContent={2} color="secondary">
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
