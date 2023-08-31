import { Stack, Rating } from "@mui/material";
import { useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const MuiRating = () => {
  const [value, setValue] = useState<number | null>(null);
  const handleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        icon={<FavoriteIcon fontSize="inheret" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inheret" />}
        highlightSelectedOnly
      />
    </Stack>
  );
};
export default MuiRating;
