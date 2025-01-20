import { createTheme } from "@mui/material";
import { breakpoints } from "./breakpoints";
import { palette } from "./palette";

export const theme = createTheme({
  ...breakpoints,
  ...palette,
});
