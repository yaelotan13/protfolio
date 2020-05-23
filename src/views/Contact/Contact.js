import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

import rocket from '../../assets/images/rocket.gif';
import { colors } from '../../constants/colors';

const useStyle = makeStyles((theme) => ({
    container: {
        display: 'flex',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column-reverse'
        }
    },
    content: {
        width: '50vw',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            width: '100vw',
            height: '50vh',
        }
    },
    mainTitle: {
        marginTop: '25vh',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.down('xs')]: {
            marginTop: 0,
            fontSize: theme.typography.h3.fontSize,
        }
    },
    subTitle: {
        marginTop: '2vh',
        fontFamily: theme.typography.h1.fontFamily,
        [theme.breakpoints.down('xs')]: {
            marginTop: '1vh',
        }
    },
    imageContainer: {
        width: '50vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            marginTop: '10vh',
            width: '100vw',
            height: '50vh',
        }
    },
    image: {
        height: '60%',
        width: '70%',
        backgroundImage:`url(${rocket})`,
        backgroundRepeat: 'no-repeat',
        [theme.breakpoints.down('xs')]: {
            width: 300,
            height: 300,
            backgroundSize: 'contain'
        }
    },
    contactInfoContainer: {
        display: 'flex',
        marginTop: '10vh',
        width: '70%',
        justifyContent: 'space-between',
        [theme.breakpoints.down('xs')]: {
            width: '90vw',
            flexDirection: 'column',
            marginTop: '5vh',
            alignItems: 'center'
        }
    },
    contactInfo: {
        width: '15vw',
        height: '30vh',
        borderRadius: 10,
        boxShadow: "1px 1px 3px #9E9E9E",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center', 
        // background: colors.gradient,
        [theme.breakpoints.down('xs')]: {
            width: '80vw',
            height: '10vh',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            marginBottom: '3vh'
        }
    },
    icon: {
        marginBottom: '3vh',
        height: '7vh',
        width: '7vw',
        [theme.breakpoints.down('xs')]: {
            marginTop: '2vh',
            height: '6vh',
            width: '6vw',
            marginLeft: '3vw',
            marginRight: '5vw'
        }
    },
    info: {
        fontSize: theme.typography.h5.fontSize,
        [theme.breakpoints.down('xs')]: {
            fontSize: theme.typography.h6.fontSize,
        }
    }
}));

const Contact = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box className={classes.content}>
                <ScrollAnimation 
                    animateIn='fadeIn'
                    delay={800}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Typography className={classes.mainTitle} variant="h1">Let's Keep In Touch!</Typography>
                </ScrollAnimation>   
                <ScrollAnimation 
                    animateIn='fadeIn'
                    delay={1500}
                    initiallyVisible={false}
                    animateOnce={true}
                >
                    <Typography className={classes.subTitle} variant="h4">I would love to hear from you 🙂</Typography>
                </ScrollAnimation>   
                <Box className={classes.contactInfoContainer}>
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={2000}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Box className={classes.contactInfo}>
                            <PhoneIphoneIcon className={classes.icon} />
                            <Typography className={classes.info}>054-6323450</Typography>
                        </Box>
                    </ScrollAnimation> 
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={2100}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                    <Box className={classes.contactInfo}>
                        <MailOutlineIcon className={classes.icon} />
                        <Typography className={classes.info}>yaelotan19@gmail.com</Typography>
                    </Box>
                    </ScrollAnimation> 
                </Box>
       
            </Box>
            <Box className={classes.imageContainer}>
                <Box className={classes.image} />
            </Box>
        </Box>
    )
};

export default Contact;
