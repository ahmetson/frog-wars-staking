import { ThirdwebProvider } from "@thirdweb-dev/react";
import { LineaTestnet } from "@thirdweb-dev/chains";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = LineaTestnet;

  return (
    <ThirdwebProvider activeChain={activeChain} clientId={process.env.THIRDWEB_CLIENT_ID!}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
