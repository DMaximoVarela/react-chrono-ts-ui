import { breakpoints } from "./breakpoints";
import { palette } from "./palette";

type mode = "light" | "dark";

export const react_chrono_ts_theme = (mode: mode) => ({
  ...breakpoints,
  palette: {
    mode,
    ...(mode === "light" ? palette.light.palette : palette.dark.palette),
  },
});
