import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

const MuiRadio = () => {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel>Years of experience</FormLabel>
      </FormControl>
      <RadioGroup name="job-experience-group" onChange={handleChange}>
        <FormControlLabel
          control={<Radio size="small" color="secondary" />}
          label="0-2"
          value="0-2"
        />
        <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
        <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
      </RadioGroup>
      <FormHelperText>Invalid Selection</FormHelperText>
    </Box>
  );
};
export default MuiRadio;
