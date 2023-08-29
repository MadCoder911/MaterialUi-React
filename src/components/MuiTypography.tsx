import { Typography } from "@mui/material";

const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">H1 heading</Typography>
      <Typography variant="h2">H2 heading</Typography>
      <Typography variant="h3">H3 heading</Typography>
      <Typography variant="h4" component="h1">
        H4 heading
      </Typography>
      <Typography variant="h5">H5 heading</Typography>
      <Typography variant="h6">H6 heading</Typography>
      <Typography variant="subtitle1">S1</Typography>
      <Typography variant="subtitle2">S2 heading</Typography>

      <Typography variant="body1">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed quasi,
        excepturi aliquam repellendus harum quis mollitia, fugiat expedita
        necessitatibus accusantium sapiente ex tenetur aliquid magni quo,
        delectus blanditiis! Totam, expedita.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse quas
        obcaecati placeat? Porro, esse. Consectetur rerum veritatis architecto
        qui sed cumque, sit veniam, fugit suscipit, blanditiis ducimus. Esse,
        dignissimos possimus?
      </Typography>
    </div>
  );
};
export default MuiTypography;
