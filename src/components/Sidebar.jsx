import React from 'react'
import "../index.css";
import { Stack } from '@mui/material';
import { categories } from "../utils/Constraints";
const Sidebar = () => {
  return (
    <Stack direction="row" sx={{
        overflowY:"auto", height: { sx: "auto" , md: "95%"},
        flexDirection: { md: "column"},
    }}>
        {
            categories.map((cat)=>(
                <button className="category-btn">
                    <span>{cat.icon}</span>
                    <span>{cat.name}</span>
                </button>
            ))
        }

    </Stack>
  )
}

export default Sidebar