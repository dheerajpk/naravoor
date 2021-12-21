import React from "react";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import FaceIcon from "@mui/icons-material/Face";

const UseFullServices = () => {
  return (
    <Stack direction="row" spacing={1}>
      <Chip icon={<FaceIcon />} label="News" />
      <Chip icon={<FaceIcon />} label="Libraies" />
      <Chip icon={<FaceIcon />} label="Find services" />
      <Chip icon={<FaceIcon />} label="Map" />
    </Stack>
  );
};
export default UseFullServices;
