import { Grid } from '@mui/material';
import React from 'react';
import AllPosts from "../../components/AllPosts/AllPosts";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <Grid container spacing={2} aria-label="centered">
            <Grid item xs={8}>
                <AllPosts/>
            </Grid>
            <Grid item xs={4}>
                <Outlet/>
            </Grid>
        </Grid>
    );
};

export default Home;