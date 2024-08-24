import { createTheme, responsiveFontSizes } from "@mui/material";
import { typography } from "./typography";
import overrides from "./overrides";
import palette from "./palette";

let theme = createTheme({
  palette: palette,
  typography,
  components: overrides(),
});

theme = responsiveFontSizes(theme);

export default theme;
