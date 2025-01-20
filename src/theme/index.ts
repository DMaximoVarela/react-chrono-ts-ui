import { createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";

const theme = createTheme({
  ...breakpoints,
  ...palette,
});

export default theme;
