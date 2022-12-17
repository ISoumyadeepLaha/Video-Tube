import React from "react";
import "../index.css";
import { Stack } from "@mui/material";
import { categories } from "../utils/Constraints";

const Sidebar = ({ selectedCat, setSelectedCat }) => {
  return (
    <Stack
      direction="row"
      sx={{
        overflowY: "auto",
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          className="category-btn"
          onClick={() => setSelectedCat(cat.name)}
          style={{
            background: cat.name === selectedCat && "#FC1503",
            color: "#fff",
          }}
          key={cat.name}
        >
          <span
            style={{
              color: cat.name === selectedCat ? "#fff" : "red",
              marginRight: "20px",
            }}
          >
            {cat.icon}
          </span>
          <span style={{ opacity: cat.name === selectedCat ? "1" : "0.8" }}>
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
};

export default Sidebar;
