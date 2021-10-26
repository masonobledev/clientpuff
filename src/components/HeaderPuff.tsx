import * as React from 'react';
import { AppBar, makeStyles, Toolbar, Typography } from '@material-ui/core';
import makeStyle from '@material-ui/core';
// import { Open Sans, Work Sans } from '@material-ui/core';

type HeaderProps = {
    brand: string
}

const useStyles = makeStyles(() => ({
    header: {
        backgroundColor: '#ff9a00',
        height: '80px',
        position: 'relative',
    },

    logo: {
        fontFamily: "Work Sans, sans-serif",
        fontWeight: 600,
        color: "#FFFEFE",
        textAlign: "left",
    },
}));

export class HeaderPuff extends React.Component <HeaderProps, {}> {

    // const { header, logo } = useStyles();

    displayDesktop = () => {
        return <Toolbar>Hi from Desktop Header</Toolbar>;
    };

    pufferatorLogo = (
        <Typography variant='h6' component='h1'>The Pufferator!</Typography>
    ); 

    public render () {
        return (
            <header>
                <AppBar>
                    <Toolbar>The Pufferator!</Toolbar>
                </AppBar>
            </header>
        );
    }
}
