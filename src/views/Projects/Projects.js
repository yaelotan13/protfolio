import React from 'react';
import { Box, Grid, Link, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import { SubTitle } from '../../components';
import { Project } from './components';

import coronaMap from '../../assets/images/corona-trans.png';
import gifts from '../../assets/images/gift-app-trans.png';
import rocket from '../../assets/images/rocket.png';
import admin from '../../assets/images/admin-trans.png';
import authServer from '../../assets/images/authentication-server.png';
import tuli from '../../assets/images/tuli.png';

const useStyle = makeStyles((theme) => ({
    container: {
        marginTop: '2%',
        padding: '6%',
    },
    headerContainer: {
        [theme.breakpoints.down('xs')]: {
            marginLeft: '-5%',
        }
    },
    subHeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        whiteSpace: 'pre-wrap',
        marginTop: '-4%',
        marginLeft: '8%',
        marginBottom: '4%',
        [theme.breakpoints.down('xs')]: {
            marginLeft: '12%',
            marginTop: '-8%',
            marginBottom: '8%',
        }
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
        [theme.breakpoints.down('sm')]: {
            width: '85vw',
            marginBottom: '4vh',
            height: '50vh',
        }
    },
}));

class ProjectData {
    constructor(id, title, description, image, tags, link, linkSource) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.image = image;
        this.tags = tags;
        this.link = link;
        this.linkSource = linkSource;
    }
};

const data = [
    new ProjectData(0, "Affiliate Gifts App", "Shop for gifts based on hobbies and personality from multiple online stores in one place", gifts, ['React Native', 'Redux', 'Saga', 'Node.js', 'PostgreSQL', 'AWS S3', 'Mobile'], "https://github.com/yaelotan13/gift-app-ui", "GitHub"),
    new ProjectData(1, "Tulis Event Website", "A website for an event planner that displays her events and invite people to connect", tuli, ['React.JS', 'Material UI', 'Node.js', 'Responsive'], "https://tulis-events.com/", "Website"),
    new ProjectData(4, "Corona Heat Map", "Corona symptoms survey and a heat map presenting the distribution of corona around your area", coronaMap, ['React.JS', 'Redux', 'Material UI', 'Node.js', 'MongoDB', 'Google Maps API', 'Responsive'], "https://corona.balistraresearch.com:5000", "Website"),
    new ProjectData(3, "Authentication Server", "Server that manages log users in, sign new users up and log out with tokens and cookies", authServer, ['React.JS', 'Redux', 'Node.js', 'PostgreSQL', 'Express', 'Tokens', 'Cookies'], "https://master.d1gdz1he65nmp7.amplifyapp.com/", "Website"),
    new ProjectData(2, "CSS Art", "An image designed with only HTML divs and pure CSS", rocket, ['HTML', 'CSS'], "https://css-art-rocket.firebaseapp.com/", "Website"),
    new ProjectData(5, "Gift App Admin Website", "Admin website to manage the gifts app products information and categories relationships", admin, ['React.JS', 'Redux', 'Saga', 'material UI', 'Node.js', 'PostgreSQL', 'AWS S3', 'AWS Amplify'], "https://github.com/yaelotan13/gift-app-admin-ui", "GitHub"), 
];

const Projects = (props) => {
    const classes = useStyle();

    return (
        <Box className={classes.container}>
            <Box>
                <Box className={classes.headerContainer}>
                    <SubTitle delay={200} title="Projects" />
                    <Box className={classes.subHeaderContainer}>
                        <Typography className={classes.description} variant="subtitle1">For more details, check out my </Typography>
                        <Link href="https://github.com/yaelotan13" target="_blank" color="inherit">
                            Github
                        </Link>
                    </Box>
                </Box>
                <Box className={classes.gridContainer}>
                    <Grid container direction="row" alignContent="flex-start" alignItems="flex-start" justify="flex-start">
                        {data.map((project, index) => 
                            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Project 
                                    key={project.id} 
                                    delay={index * 200}
                                    title={project.title} 
                                    image={project.image} 
                                    tags={project.tags}
                                    description={project.description}
                                    link={project.link}
                                    linkSource={project.linkSource}
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
