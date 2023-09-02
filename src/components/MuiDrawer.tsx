import { Box, Drawer, Typography, IconButton, Icon, Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";

const MuiDrawer = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box padding={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </>
  );
};
export default MuiDrawer;
