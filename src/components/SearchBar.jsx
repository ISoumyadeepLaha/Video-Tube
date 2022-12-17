import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";

const SearchBar = () => {
  return (
    <Paper
      component="form"
      onSubmit={(e) => {}}
      sx={{
        border: "1px solid #efefef",
        borderRadius: 2,
        pl: 2,
        boxShadow: "none",
        mr: { sm: 5 },
      }}
    >
      <input type="text" className="search-bar" placeholder="search..." value="" onChange={(e) => {}}/> 
      <IconButton type="submit" sx={{
        p: "10px",
        color: "red"
      }}>
        <Search/>
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
