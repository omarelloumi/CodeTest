import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "../assets/MenuIcon.svg";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { styles } from "./styles";
import Logo from "../assets/Logo.svg";

export const SmallNav = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
}) => {
  const pages = useSelector((state) => state.menu.pages);

  return (
    <>
      <Box sx={styles.boxSmall}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={styles.menuButtonSmall}
        >
          <img src={MenuIcon} alt="menu" />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={styles.menuSmall}
        >
          {pages.map((page) => (
            <MenuItem key={page} onClick={handleCloseNavMenu}>
              <Typography textAlign="center" sx={styles.menuItem}>
                {page}
              </Typography>
            </MenuItem>
          ))}
        </Menu>
        <img src={Logo} alt="logo" className={styles.logoSmall}></img>
      </Box>
    </>
  );
};
