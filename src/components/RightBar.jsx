import React from 'react';

import profile from "../images/profile.jpg"
import profile2 from "../images/profile2.jpg"
import profile3 from "../images/profile3.jpg"

import {
    Avatar, AvatarGroup, Box, ImageList,
    ImageListItem, Typography,List,ListItem,
    Divider,ListItemText,ListItemAvatar} from "@mui/material";



const RightBar = () => {
    return (
        <Box
            flex={2}
            p={2}
            sx={{ display: { sm : "none",md:"block" }}}
        >
            <Box position={"fixed"}>
                <Typography variant={"h6"} fontWeight={100}>Online Friends</Typography>
                <AvatarGroup max={8}>
                    <Avatar alt="Tehmoor Amjad" src={profile} />
                    <Avatar alt="Mohsin Raza" src={profile2} />
                    <Avatar alt="Zeeshan Tanveer" src={profile3} />
                    <Avatar alt="Yasir Siddique" src="" />
                    <Avatar alt="Yasir Siddique" src="" />
                    <Avatar alt="Mohsin Raza" src={profile2} />
                    <Avatar alt="Zeeshan Tanveer" src={profile3} />
                    <Avatar alt="Mohsin Raza" src={profile2} />
                    <Avatar alt="Zeeshan Tanveer" src={profile3} />
                    <Avatar alt="Zohaib Hassan" src="" />
                </AvatarGroup>

                <Typography variant={"h6"} fontWeight={100} mt={2} mb={2}>Latest Photos</Typography>
                <ImageList cols={3} rowHeight={100} gap={5}>
                    <ImageListItem>
                        <img src={"https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"} alt={"Breakfast"}/>
                    </ImageListItem>

                    <ImageListItem>
                        <img src={"https://images.unsplash.com/photo-1551782450-a2132b4ba21d"} alt={"Burger"}/>
                    </ImageListItem>
                    <ImageListItem>
                        <img src={"https://images.unsplash.com/photo-1522770179533-24471fcdba45"} alt={"Camera"}/>
                    </ImageListItem>
                </ImageList>

                <Typography variant={"h6"} fontWeight={100} mt={2}>Latest Conversations</Typography>

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Summer BBQ"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        to Scott, Alex, Jennifer
                                    </Typography>
                                    {" — Wish I could come, but I'm out of town this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Oui Oui"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Sandra Adams
                                    </Typography>
                                    {' — Do you have Paris recommendations? Have you ever…'}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>


            </Box>
        </Box>
    );
}

export default RightBar;