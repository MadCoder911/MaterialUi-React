import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

const skills = ["HTML", "CSS", "JacaScript", "TypeScript", "React"];

type Skills = {
  id: number;
  label: string;
};

const skillsOptions = skills.map((skill, i) => ({
  id: i + 1,
  label: skill,
}));

const MuiAutoComplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skills | null>(null);
  return (
    <Stack spacing={2} width="250px">
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="skills" />}
        value={skill}
        onChange={(e: any, newValue: Skills | null) => setSkill(newValue)}
      />
    </Stack>
  );
};
export default MuiAutoComplete;
