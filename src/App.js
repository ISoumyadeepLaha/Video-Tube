import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Box } from "@mui/material";
import './App.css';

import React from 'react'
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetails from "./components/VideoDetails";
import ChannelDetails from "./components/ChannelDetails";
import SearchFeed from "./components/SearchFeed";

const App = () => (
  <BrowserRouter>
  <Box sx={{ background: "#1f1f1f" }}>
    <Navbar/>
    <Routes>
      <Route path="/" exact element={<Feed/>}/>
      <Route path="/video/:id" element={<VideoDetails/>}/>
      <Route path="/channel/:id"  element={<ChannelDetails/>}/>
      <Route path="/search/:searchTerm" element={<SearchFeed/>}/>
    </Routes>
  </Box>
  </BrowserRouter>
)
 


export default App
