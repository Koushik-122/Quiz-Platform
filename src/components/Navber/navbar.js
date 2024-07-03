import { AppBar, Box, Tab, Tabs, Toolbar } from "@mui/material";
import React from "react";
import logo from "../image/logo.png"
import { Link } from "react-router-dom";

const Navber =() => {
    return(
        <div>
            <AppBar sx={{backgroundColor:"white", height: "70px"}} position="fixed">
                <Toolbar>
                    <Box sx={{display:"flex", justifyContent: "space-between", alignItems:"center", width:"100%"}}>

                        <Box>
                            <img src={logo} alt="logo" height="70" width="120" />
                        </Box>
                        <Tabs>
                            <Tab label="Home" component={Link} to={"/"} ></Tab>
                            <Tab label="My Quiz" component={Link} to={"/myquiz"} ></Tab>
                        </Tabs>
                    </Box>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Navber;