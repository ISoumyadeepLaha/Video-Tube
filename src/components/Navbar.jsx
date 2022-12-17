import React from "react";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../utils/Constraints";
import SearchBar from "./SearchBar";


const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#1f1f1f",
        top: 0,
        justifyContent: "space-between",
      }}
    >
        <Link to="/" style={{ display: "flex", alignItems: "center", color: "#1f1f1f" }}>
            <img src={logo} alt="logo" height={50} /> 
              <h3 style={{marginLeft: 10, color:"#fff"}}><span style={{color: "red"}}>Video</span>Tube</h3>
        </Link>
        <SearchBar/>
        
    </Stack>
  );
};

export default Navbar;
