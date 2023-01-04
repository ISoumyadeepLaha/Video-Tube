import React from "react";
import { AppContext } from "./context/contextAPI";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Feed from "./components/Feed";
import SearchReasult from "./components/SearchResult";
import VideoDetails from "./components/VideoDetails";

const App = () => (
  <AppContext>
    <BrowserRouter>
      <div className="flex flex-col h-full">
        <Header/>
        <Routes>
          <Route exact path="/" element={<Feed/>}/>
          <Route path="/searchresult/:searchQuery" element={<SearchReasult/>}/>
          <Route path="/video/:id" element={<VideoDetails/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  </AppContext>
);

export default App;
