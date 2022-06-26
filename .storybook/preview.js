import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global.ts";
import theme from "../src/styles/themes";

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <Story />
    </ThemeProvider>
  )
];
