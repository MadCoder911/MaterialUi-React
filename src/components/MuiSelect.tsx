import { Box, TextField, MenuItem, Menu } from "@mui/material";
import { useState } from "react";

const MuiSelect = () => {
  const [value, setValue] = useState<string[]>([]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setValue(typeof val === "string" ? val.split(",") : val);
  };
  return (
    <Box width="250px">
      {/* Single Select Dropdown */}
      {/* <TextField
        label="Select Country"
        select
        value={value}
        onChange={handleChange}
        fullWidth
      >
        <MenuItem value="IT">Italia</MenuItem>
        <MenuItem value="EG">Egypt</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="TR">Turkey</MenuItem>
      </TextField> */}
      {/* Multi Select Dropdown */}
      <TextField
        label="Select Country"
        select
        value={value}
        onChange={handleChange}
        fullWidth
        size="small"
        color="secondary"
        helperText="Please select your country"
        SelectProps={{
          multiple: true,
        }}
      >
        <MenuItem value="IT">Italia</MenuItem>
        <MenuItem value="EG">Egypt</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="TR">Turkey</MenuItem>
      </TextField>
    </Box>
  );
};
export default MuiSelect;
