import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
const MuiNavBar = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton size="large" color="inherit" edge="start">
          <CatchingPokemonIcon />
        </IconButton>
        <Typography component="div" sx={{ flexGrow: 1 }}>
          POKEMONEAPP
        </Typography>
        <Stack spacing={2} direction="row">
          <Button color="inherit">Features</Button>
          <Button color="inherit">Pricing</Button>
          <Button
            color="inherit"
            id="resources-button"
            onClick={handleClick}
            aria-controls={open ? "resources-menu" : undefined}
            aria-haspopup={true}
            aria-expanded={open ? "true" : undefined}
          >
            Resources
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
        <Menu
          id="resources-menu"
          anchorEl={anchorEl}
          open={open}
          MenuListProps={{
            "aria-label": "resources-button",
          }}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Blog</MenuItem>
          <MenuItem onClick={handleClose}>Podcast</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default MuiNavBar;
