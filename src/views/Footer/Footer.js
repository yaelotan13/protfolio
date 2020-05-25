import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyle = makeStyles(theme => ({
    footer: {
        height: '8vh',
        backgroundColor: theme.palette.primary.dark,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        fontFamily: theme.typography.h3.fontFamily,
        color: 'white',
        fontSize: theme.typography.h5.fontSize,
        fontWeight: theme.typography.h3.fontWeight,
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.h6.fontSize,
        }
    }
}));

const Footer = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.footer}>
            <Typography className={classes.content}>This Website was made with ❤️ and from scratch 😎 by me</Typography>
        </Box>
    )
};

export default Footer;
