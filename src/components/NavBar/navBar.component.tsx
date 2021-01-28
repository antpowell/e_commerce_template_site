import { AppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import React from 'react';

import useStyles from './navBar.styles';

interface NavBarProps
{

}

export const NavBar = (props: NavBarProps) =>
{
    const classes = useStyles();
    return (
        <div>
            <AppBar position='fixed' className={classes.appBar} color='inherit'>
                <Toolbar>
                    <Typography variant='h6' className={classes.title} color='inherit'>
                        <img src='https://www.flaticon.com/svg/vstatic/svg/4118/4118095.svg?token=exp=1611824229~hmac=dcf8e0231a47ff15165523cd9ce9d2aa' alt="Commerce.js" height='25px' className={classes.image} />
                        NOT FOR PRODUCTION
                        <div className={classes.grow} />
                        <div className="">
                            <IconButton aria-label='Show cart itmes' color='inherit'>
                                <Badge badgeContent={2} color='secondary'>
                                    <ShoppingCart />
                                </Badge>
                            </IconButton>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}