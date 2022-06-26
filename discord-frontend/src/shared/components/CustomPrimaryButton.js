import React from "react";
import Button from "@mui/material/Button";

const CustomPrimaryButton = ({
  // destructuring assignment on the props
  label,
  additionalStyles,
  disabled,
  onClick,
}) => {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "#67063c",
        color: "#FFFFFF",
        textTransform: "none",
        fontSize: "16px",
        fontWeight: 500,
        width: "100%",
        height: "40px",
      }}
      style={additionalStyles ? additionalStyles : {}} // If additional styles are assigned, use that. If not nothing happens.
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default CustomPrimaryButton;
