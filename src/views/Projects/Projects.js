import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { SubTitle } from '../../components';
import { Project } from './components';

import mockAuthServerWhite from '../../assets/images/auth-white.png';
import mockGiftsAppWhite from '../../assets/images/gifts-white.png';
import mockGiftsAdminWhite from '../../assets/images/admin-white.png';
import mockCoronaAppWhite from '../../assets/images/corona-white.png';
import mockEranWhite from '../../assets/images/eran-white.png';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    headerContainer: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'pre-wrap',
        marginTop: '-4%',
        marginLeft: '8%',
        marginBottom: '4%',
    },
    gridContainer: {
        margin: '0 auto',
        display: 'flex',
        height: '120vh',
        width: '75vw',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        }
    },
}));

class ProjectData {
    constructor(id, title, image, tags) {
        this.id = id;
        this.title = title;
        this.image = image;
        this.tags = tags;
    }
};

const data = [
    new ProjectData(0, "Affiliate Gifts App", mockGiftsAppWhite, ['React Native', 'Redux', 'Saga', 'Node.js', 'Postresql', 'AWS s3', 'mobile']),
    new ProjectData(1, "Authentication Server", mockAuthServerWhite, ['React.JS', 'Node.js', 'Postresql', 'Express', 'Tokens', 'Cookies']),
    new ProjectData(4, "Professional Personal Website", mockEranWhite, ['React.JS', 'material UI', 'responsive']),
    new ProjectData(2, "Gift App Admin Website", mockGiftsAdminWhite, ['React.JS', 'Redux', 'Saga', 'material UI', 'Node.js', 'Postresql', 'AWS s3']),
    new ProjectData(3, "Corona HeatMap", mockCoronaAppWhite, ['React.JS', 'Redux', 'material UI', 'Node.js', 'MongoDB', 'Google Maps API', 'responsive']),
];

const Projects = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box>
                <SubTitle delay={800} title="Projects" />
                <Box className={classes.headerContainer}>
                    <Typography className={classes.description} variant="subtitle1">For more details, check out my </Typography>
                    <Link href="https://github.com/yaelotan13" target="_blank" color="inherit">
                        Github
                    </Link>
                </Box>
                <Box className={classes.gridContainer}>
                    <Grid container direction="row" alignContent="flex-start" alignItems="flex-start" justify="flex-start">
                        {data.map((project, index) => 
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Project 
                                    key={project.key} 
                                    delay={index === 0 || index === 1 ? 800 : 1000}
                                    title={project.title} 
                                    image={project.image} 
                                    tags={project.tags}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Box>
            </Box>
        </Box>
    )
};

export default Projects;
