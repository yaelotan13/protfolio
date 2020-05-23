import React, { useState } from 'react';
import { Box, Typography, Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyle = makeStyles((theme) => ({
    project: {
        height: '40vh',
        width: '35vw',
        marginBottom: '3vh',
        boxShadow: "2px 2px 3px 3px #9E9E9E",
        cursor: 'pointer',
        // backgroundColor: theme.palette.background.default,
        backgroundColor: theme.palette.white,
        [theme.breakpoints.down('xs')]: {
            width: '75vw',
            marginBottom: '4vh',
            height: '50vh',
        }
    },
    titleContainer: {
        height: '5vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: '100%',
        width: '100%'
    },
    imageHovered: {
        backgroundColor: 'rgba(0, 0, 0, .4)', 
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    title: {
        color: theme.palette.white,
        fontFamily: theme.typography.h6.fontFamily,
    },
    tagsContainer: {
    },
    tag: {
        marginRight: '1%',
        marginTop: '1%',
        [theme.breakpoints.down('xs')]: {
            marginRight: '2%',
            marginTop: '2%',
        }
    }
}));

const Project = (props) => {
    const classes = useStyle();
    const [hovered, setHovered] = useState(false);
    const { delay, title, image, tags } = props;

    const toggleClicked = () => setHovered(hovered => !hovered ? true : false);
        
    return (
        <ScrollAnimation 
            animateIn='fadeInUp'
            delay={delay}
            initiallyVisible={false}
            animateOnce={true}
        >
            <Box 
                className={classes.project} 
                onMouseEnter={() => setHovered(true)} 
                onMouseLeave={() => setHovered(false)}
                onClick={toggleClicked}
            >
                <Box 
                    className={classes.image}
                    style={{
                        backgroundImage: `url(${image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                >
                    {hovered && 
                    <Box className={classes.imageHovered}>
                        <Typography variant="h5" className={classes.title}>{title}</Typography>
                        <Box className={classes.tagsContainer}>
                            {tags.map((tag, index) =>
                                <Chip key={tag.concat(index)} className={classes.tag} label={tag} color="primary" /> 
                            )}
                        </Box>
                    </Box>}
                </Box>
            </Box>
        </ScrollAnimation>
    )
};

export default Project;
