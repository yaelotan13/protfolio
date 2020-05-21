import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { colors } from '../../constants';

const useStyles = makeStyles({        
    conatainer: {
        backgroundColor: '#536dfe',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        marginTop: '20vh',
    },
    icon: {
        marginTop: '50vh',
        height: 60,
        width: 60,
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        animationName: 'move'
    },
    separator: {
        color: colors.darkGrey,
        display: 'inline'
    },
    "@keyframes move": {
        "0%":   { bottom: 0 },
        "50%":  { bottom: 50 },
        "100%": { bottom: 0 }
    }
});

const Home = (props) => {
    const classes = useStyles();

    return (
        <Box className={classes.conatainer}>
            <Box className={classes.content}>
                <Typography variant="h1">Hello, I am Yael</Typography>
                <Typography variant="h5">Fullstack developer 💻  <Box className={classes.separator}>|</Box>  sushi lover 🍣  <Box className={classes.separator}>|</Box>  beach volleyball player 🏐</Typography>
            </Box>
            <ExpandMoreIcon className={classes.icon} />
        </Box>
    )
};

export default Home;
