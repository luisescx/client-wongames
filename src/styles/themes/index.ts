import colors from "./colors";
import font from "./fonts";
import spacings from "./spacings";
import layers from "./layers";

const theme = {
  grid: {
    container: "130rem",
    gutter: "3.2rem"
  },
  border: {
    radius: "0.4rem"
  },
  transition: {
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out"
  },
  colors,
  font,
  spacings,
  layers
};

export default theme;
