import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Stack,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
const MuiNavBar = () => {
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
          <Button color="inherit">About</Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};
export default MuiNavBar;
