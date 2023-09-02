import { Link, Stack, Typography } from "@mui/material";

const MuiLink = () => {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#">Link</Link>
      <Typography>
        <Link href="#" color="black" underline="none">
          Link
        </Link>
      </Typography>
    </Stack>
  );
};
export default MuiLink;
