import { Box, Stack, Divider } from "@mui/material";

const MuiLayout = () => {
  return (
    <Stack
      direction="row"
      spacing={10}
      divider={<Divider orientation="vertical" flexItem />}
      sx={{
        border: "1px solid",
      }}
    >
      <Box
        component="section"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "100px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Codevolution
      </Box>
      <Box
        display="flex"
        height="100px"
        width="100px"
        bgcolor="success.light"
        p={2}
      >
        X
      </Box>
    </Stack>
  );
};
export default MuiLayout;
