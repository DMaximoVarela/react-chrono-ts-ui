import React from "react";
import { Typography } from "@mui/material";

interface TitleProps {
  text: string;
  fontWeight?: string;
}

const Title: React.FC<TitleProps> = ({ text, fontWeight }) => {
  return (
    <Typography
      component="h1"
      variant="h1"
      sx={{
        fontSize: { xs: "18px", md: "20px", lg: "24px" },
        fontWeight: fontWeight || "bold",
      }}
    >
      {text}
    </Typography>
  );
};

export default Title;
