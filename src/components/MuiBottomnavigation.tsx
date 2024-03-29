import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { useState } from "react";
const MuiBottomnavigation = () => {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{
        width: "100%",
        position: "absolute",
        bottom: 0,
        backgroundColor: "green",
      }}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
    </BottomNavigation>
  );
};
export default MuiBottomnavigation;
