import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

const MuiSwitch = () => {
  const [dark, setDark] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDark(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label="Dark Mode"
        control={
          <Switch
            checked={dark}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
      />
    </Box>
  );
};
export default MuiSwitch;
