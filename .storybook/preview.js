import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global.ts";
import theme from "../src/styles/themes";

export const parameters = {
  backgrounds: {
    default: "won-light",
    values: [
      {
        name: "won-light",
        value: theme.colors.white
      },
      {
        name: "won-dark",
        value: theme.colors.mainBg
      }
    ]
  }
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles removeBg />

      <Story />
    </ThemeProvider>
  )
];
