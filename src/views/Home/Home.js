import React, { useState, Fragment } from 'react';
import { Box, Typography, IconButton, List, Drawer, ListItemText, Hidden, AppBar, Toolbar, Button, ListItemIcon, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ScrollAnimation from 'react-animate-on-scroll';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Link, Element } from 'react-scroll';

import { colors } from '../../constants';

const useStyles = makeStyles((theme) => ({
    firstScreen: {
        backgroundColor: '#536dfe',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    content: {
        marginTop: '20vh',
    },
    mainHeader: {
        [theme.breakpoints.between('sm', 'xl')]: {
            fontSize: '78px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '40px',
        }
    },
    whoAmIContainer: {
        display: 'flex',
        alignItems: 'center',
        marginTop: '8%',
    },
    whoAmI: {
        whiteSpace: 'pre-wrap',
        [theme.breakpoints.between('sm', 'xl')]: {
            fontSize: '22px',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        }
    },
    "@keyframes move": {
        "0%":   { bottom: 0 },
        "50%":  { bottom: 50 },
        "100%": { bottom: 0 }
    },
    icon: {
        marginTop: '50vh',
        height: 60,
        width: 60,
        animationName: 'move',
        animationDuration: '2s',
        animationIterationCount: 'infinite',
        cursor: 'pointer'
    },
    separator: {
        color: colors.darkGrey,
        display: 'inline'
    },
    secondScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'green'
    },
    thirdScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'orange'
    },
    firthScreen: {
        height: '100vh',
        width: '100vw',
        backgroundColor: 'purple'
    },
    navBarContainer: {
        marginLeft: '1%',
        display: 'flex'
    },
    navBar: {
        justifyContent: 'flex-end',
    },
    navBarItem: {
        marginLeft: '5%'
    },
    drawerList: {
        width: 250
    },
    drawerItem: {
        color: 'grey',
        marginTop: '5%',
        display: 'flex',
        alignItems: 'center',
    },
    drawerItemText: {
        marginLeft: '-4%',
        fontWeight: 'bold'
    },
    hamburgerIcon: {
        alignSelf: 'flex-start'
    },
    devLangaugeIcon: {
        width: 100,
        height: 100
    }
}));       
 
const Home = (props) => {
    const classes = useStyles();
    const [openDrawer, setOpenDrawer] = useState(false);

    const toggleDrawer = () => {
        setOpenDrawer(prevStateOpened => prevStateOpened ? false : true);
    };

    const screens = ['Home', 'About', 'Projects', 'Conatct'];
    
    const getDrawerIcon = (index) => {
        switch (index) {
            case 0: {
                return <HomeIcon />
            }
            case 1: {
                return <FaceIcon />
            }
            case 2: {
                return <WhatshotIcon />
            }
            case 3: {
                return <MailOutlineIcon />
            }
            default: {
                return <HomeIcon />
            }
        }
    };

    return (
        <Box>
            <AppBar className={classes.navBarContainer}>
                <Hidden smDown>
                    <Toolbar className={classes.navBar}>
                        {screens.map((screen, index) => 
                            <Link key={screen.concat(index)} activeClass="active" className={`screen${index + 1}`} to={`screen${index + 1}`} spy={true} smooth={true} duration={500} >
                                <Button color="inherit" className={classes.navBarItem}>{screen}</Button>
                            </Link>
                        )}
                    </Toolbar>
                </Hidden>
                <Hidden smUp>
                    <Fragment>
                        <IconButton className={classes.hamburgerIcon} onClick={() => toggleDrawer()}>
                            <MenuIcon />
                        </IconButton>
                        <Drawer open={openDrawer} onClose={() => setOpenDrawer(false)}>
                            <List className={classes.drawerList}>
                                {screens.map((screen, index) => 
                                    <Link key={screen.concat(index)} activeClass="active" className={`screen${index + 1}`} to={`screen${index + 1}`} spy={true} smooth={true} duration={500}>
                                        <ListItem className={classes.drawerItem}>
                                            <ListItemIcon>{getDrawerIcon(index)}</ListItemIcon>
                                            <ListItemText className={classes.drawerItemText}>{screen}</ListItemText>
                                        </ListItem>
                                    </Link>
                                )}
                            </List>
                        </Drawer>
                    </Fragment>
                </Hidden>
            </AppBar>
            <Element name="screen1" className="element" >
                <Box className={classes.firstScreen}>
                    <ScrollAnimation 
                        animateIn='fadeIn'
                        delay={1000}
                        duration={2}
                        initiallyVisible={false}
                        animateOnce={true}
                    >
                        <Box className={classes.content}>
                            <Typography className={classes.mainHeader} variant="h1">Hello, I am Yael</Typography>
                            <Box className={classes.whoAmIContainer}>
                                <ScrollAnimation
                                    animateIn='fadeInDown'
                                    delay={1500}
                                    initiallyVisible={false}
                                    animateOnce={true}
                                >
                                    <Typography className={classes.whoAmI} variant="h5">Fullstack developer 👩🏻‍💻 |  </Typography>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn='fadeInDown'
                                    delay={2000}
                                    initiallyVisible={false}
                                    animateOnce={true}
                                >
                                    <Typography className={classes.whoAmI} variant="h5"> sushi lover 🍣  | </Typography>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn='fadeInDown'
                                    delay={2500}
                                    initiallyVisible={false}
                                    animateOnce={true}
                                >
                                    <Typography className={classes.whoAmI} variant="h5"> volleyball player 🏐</Typography>
                                </ScrollAnimation>
                            </Box>          
                        </Box>
                        <ScrollAnimation
                            animateIn='fadeInDown'
                            delay={3500}
                            initiallyVisible={false}
                            animateOnce={true}
                        >
                            <Link activeClass="active" className="screen2" to="screen2" spy={true} smooth={true} duration={500}>
                                <ExpandMoreIcon className={classes.icon} />
                            </Link>
                        </ScrollAnimation>
                    </ScrollAnimation>
                </Box>
            </Element>
            <Element name="screen2" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.secondScreen}>
                        <Box className={classes.iconsConatiner}>

                        </Box>
                    </Box>
                </ScrollAnimation>
            </Element>
            <Element name="screen3" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.thirdScreen}>
                        hello again
                    </Box>
                </ScrollAnimation>
            </Element>  
            <Element name="screen4" className="element">
                <ScrollAnimation animateIn="fadeIn">
                    <Box className={classes.firthScreen}>
                        goodbey now
                    </Box>
                </ScrollAnimation>
            </Element>              
        </Box>
    )
};

export default Home;
