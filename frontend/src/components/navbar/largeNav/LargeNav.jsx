import React from "react";
import { useSelector } from "react-redux";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { styles } from "./styles";

export const LargeNav = ({ handleCloseNavMenu }) => {
  const pages = useSelector((state) => state.menu.pages);

  return (
    <>
      <Box sx={styles.boxLarge}>
        {pages.map((page) => (
          <Button
            key={page}
            onClick={handleCloseNavMenu}
            sx={styles.menuButtonLarge}
          >
            {page}
          </Button>
        ))}
      </Box>
    </>
  );
};
