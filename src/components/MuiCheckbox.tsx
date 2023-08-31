import {
  Box,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import { useState } from "react";
import BookmarkborderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
const MuiCheckbox = () => {
  const [value, setValue] = useState<boolean>(false);
  const [skills, setSkills] = useState<string[]>([]);
  console.log(skills);
  //
  //
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.checked);
  };
  //
  //
  const handleSkillsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = skills.indexOf(e.target.value);
    if (index === -1) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills(skills.filter((skill) => skill !== e.target.value));
    }
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          label="I accept terms and conditions"
          control={
            <Checkbox size="small" checked={value} onChange={handleChange} />
          }
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkborderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={value}
          onChange={handleChange}
        />
      </Box>
      {/*  */}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  size="small"
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  size="small"
                  onChange={handleSkillsChange}
                />
              }
            />
            <FormControlLabel
              label="Javascript"
              control={
                <Checkbox
                  value="js"
                  checked={skills.includes("js")}
                  size="small"
                  onChange={handleSkillsChange}
                />
              }
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
};
export default MuiCheckbox;
