import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

import { DevLanguagesLogos, Educations } from './components';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    educationContainer: {
        height: '50vh',
        [theme.breakpoints.down('xs')]: {
            height: '100vh',
        }
    },
    title: {
        marginBottom: '2%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '12%',
            marginBottom: '8%',
            fontSize: '20px',
        }
    }
}));

const AboutMe = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.educationContainer}>
                <ScrollAnimation 
                    animateIn='fadeIn'
                    delay={200}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Typography className={classes.title} variant="h3" align="left">Education</Typography>
                </ScrollAnimation>
                <Educations />
            </Box>
            <Box>
                <ScrollAnimation 
                    animateIn='fadeIn'
                    delay={800}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                     <Typography className={classes.title} variant="h3" align="left">Skills</Typography>
                </ScrollAnimation>
                <DevLanguagesLogos />
            </Box>
        </Box>
    )
};

export default AboutMe;
