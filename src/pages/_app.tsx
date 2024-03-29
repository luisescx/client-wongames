import { ApolloProvider } from "@apollo/client";
import NextNprogress from "nextjs-progressbar";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "styles/global";
import theme from "styles/themes";
import { useApollo } from "utils/apollo";
import { CartProvider } from "hooks/use-cart";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState);
  const router = useRouter();

  return (
    <SessionProvider session={pageProps.session}>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <CartProvider>
            <Head>
              <title>Won Games</title>

              <link rel="shortcut icon" href="/img/icon-512.png" />
              <link rel="apple-touch-icon" href="/img/icon-512.png" />
              <meta
                name="description"
                content="The best Game Stores in the world!"
              />
            </Head>

            <GlobalStyles />
            <NextNprogress
              color="#F231A5"
              startPosition={0.3}
              stopDelayMs={200}
              height={5}
            />
            <Component {...pageProps} key={router.asPath} />
          </CartProvider>
        </ThemeProvider>
      </ApolloProvider>
    </SessionProvider>
  );
}

export default App;
