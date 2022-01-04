//_app.tsx se va a renderizar como un contenedor para todas nuestras páginas definidades dentro de pages
import type {AppProps} from "next/app";

import "../globals.css";
import Head from "next/head";

import Page from "../components/Page";

function App({Component, pageProps}: AppProps) {
  return (
    <Page>
      <Head>
        <title>Tiency</title>
        <meta content="initial-scale=1.0, width=device-width" name="viewport" />
      </Head>
      <Component {...pageProps} />
    </Page>
  );
}

export default App;
