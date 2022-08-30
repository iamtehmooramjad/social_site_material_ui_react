import React from "react";
import {
    Avatar,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    CardMedia, Checkbox,
    IconButton,
    Typography
} from "@mui/material";
import profile from "../images/profile.jpg"
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

const Post = () => {
    return(<Card sx={{margin : 5}}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                            TA
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVert />
                        </IconButton>
                    }
                    title="Tehmoor Amjad"
                    subheader="August 30, 2022"
                />
                <CardMedia
                    component="img"
                    height="20%"
                    image={profile}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <Checkbox  icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
                    </IconButton>
                    <IconButton aria-label="share">
                        <Share />
                    </IconButton>
                </CardActions>
            </Card>)
}

export default Post