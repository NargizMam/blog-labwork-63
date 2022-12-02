import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import {Button, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import './Navlink.css';

const Navbar = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                    <div className="Navlink">
                        <NavLink to="/">
                            My BLOG
                        </NavLink>
                        <Grid>
                            <Button variant="outlined">
                                <NavLink to='/'>Home</NavLink>
                            </Button>
                            <Button variant="outlined" >
                                <NavLink to="new-post">Add</NavLink>
                            </Button>
                            <Button variant="outlined">
                                <NavLink to="about">About</NavLink>
                            </Button>
                            <Button variant="outlined">
                                <NavLink to="contacts">Contacts</NavLink>
                            </Button>
                        </Grid>

                    </div>
            </AppBar>
        </Box>
    );
}

export default Navbar;