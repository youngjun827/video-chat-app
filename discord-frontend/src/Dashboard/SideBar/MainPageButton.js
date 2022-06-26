import React from "react";
import Button from "@mui/material/Button";
import Logo from "../../assets/JOO_white.png";

const MainPageButton = () => {
  return (
    <Button
      style={{
        width: "48px",
        height: "48px",
        borderRadius: "16px",
        margin: 0,
        padding: 0,
        minWidth: 0,
        marginTop: "10px",
        color: "white",
        backgroundColor: "#67063c",
      }}
    >
      <img src={Logo} style={{ width: "35px" }}></img>
    </Button>
  );
};

export default MainPageButton;
