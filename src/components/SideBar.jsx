import React from 'react';
import {
    Box,
    List,
    ListItemButton,
    ListItem,
    ListItemText,
    ListItemIcon,
    Switch
} from "@mui/material";
import {
    Group,
    Home, ModeNight,
    Pages,
    Person, Portrait,
    Settings,
    Store
} from "@mui/icons-material";

const SideBar = (props) => {
    return(
        <Box
            flex={1}
            p={2}
            sx={{ display: { sm : "none",md:"block" }}}
        >
           <Box position={"fixed"}>
               <List>
                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#home"}>
                           <ListItemIcon>
                               <Home/>
                           </ListItemIcon>
                           <ListItemText primary="HomePage" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#pages"}>
                           <ListItemIcon>
                               <Pages/>
                           </ListItemIcon>
                           <ListItemText primary="Pages" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#groups"}>
                           <ListItemIcon>
                               <Group />
                           </ListItemIcon>
                           <ListItemText primary="Groups" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#marketplace"}>
                           <ListItemIcon>
                               <Store/>
                           </ListItemIcon>
                           <ListItemText primary="Marketplace" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#friends"}>
                           <ListItemIcon>
                               <Person/>
                           </ListItemIcon>
                           <ListItemText primary="Friends" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#settings"}>
                           <ListItemIcon>
                               <Settings/>
                           </ListItemIcon>
                           <ListItemText primary="Settings" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#profile"}>
                           <ListItemIcon>
                               <Portrait />
                           </ListItemIcon>
                           <ListItemText primary="Profile" />
                       </ListItemButton>
                   </ListItem>

                   <ListItem disablePadding>
                       <ListItemButton component={"a"} href={"#daynight"}>
                           <ListItemIcon>
                               <ModeNight />
                           </ListItemIcon>
                           <Switch onChange={e=>props.setMode(props.mode === "light" ? "dark" : "light")}/>
                       </ListItemButton>
                   </ListItem>
               </List>
           </Box>
        </Box>
    )
}
export default SideBar;