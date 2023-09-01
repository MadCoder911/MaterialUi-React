import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";

const MuiCard = () => {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component={"img"}
          height="140"
          alt="car image"
          image="https://images.unsplash.com/photo-1693550038620-b49c029404c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            quibusdam facere ipsam, culpa perferendis laudantium deleniti nisi
            laborum? Voluptate blanditiis dicta quos perspiciatis aspernatur
            repellat eius quisquam repudiandae fugit omnis!
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained">
            SHARE
          </Button>
          <Button size="small">LEARN MORE</Button>
        </CardActions>
      </Card>
    </Box>
  );
};
export default MuiCard;
