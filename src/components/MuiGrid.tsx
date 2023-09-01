import { Box, Stack, Divider, Grid } from "@mui/material";
const MuiGrid = () => {
  return (
    <>
      <Grid container my={4} spacing={2}>
        <Grid item sm={6} xs={12}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default MuiGrid;
