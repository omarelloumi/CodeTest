import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

import { styles } from "./styles";
import User from "./assets/User.svg";

export const UserAvatar = ({
  handleOpenUserMenu,
  anchorElUser,
  handleCloseUserMenu,
}) => {
  const settings = useSelector((state) => state.menu.settings);

  return (
    <>
      <Box sx={styles.boxAvatar}>
        <Tooltip title="Open settings">
          <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
            <img src={User} alt="" style={styles.avatar} />
          </IconButton>
        </Tooltip>
        <Menu
          sx={styles.menuAvatar}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem key={setting} onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </>
  );
};
