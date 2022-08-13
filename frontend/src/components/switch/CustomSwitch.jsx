import * as React from "react";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import Cart from "./assets/Cart.svg";

const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: "140px",
  height: "70px",
  padding: 5,

  "& .MuiSwitch-switchBase": {
    margin: 0,
    padding: 0,
    transform: "translateX(0px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(80px)",
      "& .MuiSwitch-thumb:before": {
        backgroundImage: `url(${Cart})`,
      },

      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#FFFFFF" : "#FFFFFF",
        border: "2px solid #FFFFFF",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: "60px",
    height: "70px",
    "&:before": {
      content: "''",
      position: "absolute",
      width: "100%",
      height: "100%",
      left: 0,
      top: 0,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundImage: `url('${Cart}')`,
      border: "1px solid rgba(2, 2, 2, 0.74)",
      borderRadius: 45,
    },
  },
  "& .MuiSwitch-track": {
    "&:after": {
      content: "''",
    },
    "&:before": {
      content: "'_____- Swipe _____-  to buy'",
    },
    opacity: 1,
    backgroundColor: theme.palette.mode === "dark" ? "#8796A5" : "#FFFFFF",
    borderRadius: 45,
  },
}));

const CustomSwitch = () => {
  return (
    <>
      <MaterialUISwitch sx={{ m: "5%" }} />
    </>
  );
};

export default CustomSwitch;
