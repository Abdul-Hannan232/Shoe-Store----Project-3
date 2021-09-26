import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { NavLink } from "react-router-dom";


const navlink = {
    color: "white",
    textDecoration: "none",
    margin: "0 5%",
}
export default function ButtonAppBar() {
    return (
        
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" gutterBottom component="div"  >
                        <NavLink end style={navlink} activeClassName="active" to="/" >Home</NavLink>
                        <NavLink style={navlink} activeClassName="active" to="/about"  >About</NavLink>
                        <NavLink style={navlink} activeClassName="active" to="/products"  >Products</NavLink>
                    </Typography>
                    
                </Toolbar>
            </AppBar>
        
    );
}
