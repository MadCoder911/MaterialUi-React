import { Stack, TextField, InputAdornment } from "@mui/material";
import { useState } from "react";

const MuiTextFields = () => {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4}>
      <p>Text Fields</p>
      <Stack direction="row" spacing={2}>
        <TextField
          label="name"
          variant="outlined"
          size="small"
          color="secondary"
        />
        <TextField label="name" variant="filled" size="medium" />
        <TextField label="name" variant="standard" />
      </Stack>
      {/*  */}
      <p>2</p>
      <Stack direction="row" spacing={2}>
        <TextField label="name" required size="small" />
        <TextField
          label="password"
          type="password"
          helperText="Don't share your password with anyone"
        />
        <TextField label="name" variant="standard" />
        <TextField label="Read-only" InputProps={{ readOnly: true }} />
      </Stack>
      {/*  */}
      <Stack direction="row" spacing={2}>
        <TextField
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "Required" : "Do not share your password"}
          label="amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">KG</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
};
export default MuiTextFields;
