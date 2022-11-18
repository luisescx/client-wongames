import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/global.ts";
import theme from "../src/styles/themes";
import { CartContext, CartContextDefaultValues } from "../src/hooks/use-cart";

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
  (Story, context) => (
    <ThemeProvider theme={theme}>
      <CartContext.Provider
        value={{
          ...CartContextDefaultValues,
          ...(context?.args?.cartContextValue || {}),
          ...context.args
        }}
      >
        <GlobalStyles removeBg />
        <Story />
      </CartContext.Provider>
    </ThemeProvider>
  )
];
