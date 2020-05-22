import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { SubTitle } from '../../components';
import { Project } from './components';
import coronaMap from '../../assets/images/corona-map.png';
import gifts from '../../assets/images/gifts-categories.png';
import giftsProducts from '../../assets/images/gifts-products.png';
import admin from '../../assets/images/admin.png';
import adminTablet from '../../assets/images/adminTablet.png';
import authServer from '../../assets/images/auth-server.png';

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
        alignItems: 'space-between'
    },
    project: {
        height: '40vh',
        width: '30vw',
        marginBottom: '3vh',
        borderRadius: 10,
        boxShadow: "2px 2px 1px 2px #9E9E9E",
        backgroundColor: theme.palette.background.default,
        [theme.breakpoints.down('xs')]: {
            width: '85vw',
            marginBottom: '4vh',
            height: '50vh',
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
    new ProjectData(0, "Affiliate Gifts App", gifts, ['React Native', 'Redux', 'Saga', 'Node.js', 'Postresql', 'AWS s3', 'mobile']),
    new ProjectData(1, "Authentication Server", authServer, ['React.JS', 'Redux', 'Node.js', 'Postresql', 'Express']),
    new ProjectData(2, "Gift App Admin Website", admin, ['React.JS', 'material UI', 'Node.js', 'Postresql', 'AWS s3']),
    new ProjectData(3, "Corona HeatMap", coronaMap, ['React.JS', 'material UI', 'Node.js', 'MongoDB', 'Google Maps API', 'responsive']),
];

const Projects = (props) => {
    const classes = useStyle();

    const getStyle = (index) => {
        if (index === 0 || index === 2) {
            return [classes.project, classes.small].join(' ');
        }
        if (index === 1 || index === 3) {
            return [classes.project, classes.large].join(' ');
        }

        return [classes.project, classes.fullWidth].join(' ');
    }

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
