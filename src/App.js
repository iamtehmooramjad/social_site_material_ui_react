import React, {useState} from "react";
import SideBar from "./components/SideBar";
import Feed from "./components/Feed";
import RightBar from "./components/RightBar";
import {Box, createTheme, Stack, ThemeProvider} from "@mui/material";
import NavBar from "./components/NavBar";
import AddPost from "./components/AddPost";

export default function App() {

    const [mode,setMode] = useState("light");

    const darkTheme = createTheme({
        palette:{
            mode: mode
        }
    })
    return (
        <ThemeProvider theme={darkTheme}>
            <Box bgcolor={"background.default"} color={"text.primary"}>
                <NavBar />
                <Stack direction={"row"} spacing={2} justifyContent={"space-between"} >
                    <SideBar setMode={setMode} mode={mode}/>
                    <Feed/>
                    <RightBar/>
                </Stack>
                <AddPost />
            </Box>
        </ThemeProvider>

    )
}