import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { useState } from "react";

import Logo from "./assets/Logo.svg";
import { styles } from "./styles";

import { SmallNav } from "./smallNav/SmallNav";

import './styles.css';


const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar color="transparent" elevation={0} className="appBar" position="absolute">
      <Container maxWidth="xl" sx={styles.container}>
        <Toolbar disableGutters sx={styles.toolbar}>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={styles.logoLarge}
          >
            <img src={Logo} alt="logo" className={styles.logoImgLarge}></img>
          </Typography>
          <SmallNav
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
