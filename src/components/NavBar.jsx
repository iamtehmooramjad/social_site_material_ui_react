import React, {useState} from "react";
import {AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography} from "@mui/material";
import {CodeRounded, Mail, Notifications} from "@mui/icons-material";
import profile from "../images/profile.jpg"

const StyledToolbar = styled(Toolbar)({
    display : "flex",
    justifyContent : "space-between"
});

const Search = styled("div")(({theme})=>({
    backgroundColor : "white",
    padding : "0 10px",
    borderRadius : theme.shape.borderRadius,
    width : "40%"
}));

const Icons = styled(Box)(({theme})=>({
    display : "none",
    gap :"20px",
    alignItems: "center",

    /** If its equal or greater than 600(sm) */
    [theme.breakpoints.up("sm")]:{
        display : "flex"
    }
}));

const UserBox = styled(Box)(({theme})=>({
    display : "flex",
    gap :"10px",
    alignItems: "center",

    /** If its equal or greater than 600(sm) */
    [theme.breakpoints.up("sm")]:{
        display : "none"
    }
}));

const NavBar = () => {
    const [open,setOpen] = useState(false);

    return (
        <AppBar position={"sticky"}>
            <StyledToolbar>
                <Typography variant={"h6"} sx={{display: { xs:"none", sm: "block"}}}>
                    Developer
                </Typography>
                <CodeRounded sx={{display : { xs : "block", sm : "none"}}} />
                <Search><InputBase placeholder={"Search here"} /> </Search>
                <Icons>
                    <Badge badgeContent={3} color={"error"}>
                        <Mail/>
                    </Badge>
                    <Badge badgeContent={2} color={"error"}>
                        <Notifications/>
                    </Badge>
                    <Avatar src={profile} sx={{width:30,height:30}} onClick={(e) => setOpen(true)}/>
                </Icons>
                <UserBox onClick={(e) => setOpen(true)}>
                    <Avatar src={profile} sx={{width:30,height:30}} />
                </UserBox>
            </StyledToolbar>

            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={(e)=>setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default NavBar