import { ThirdwebProvider } from "@thirdweb-dev/react";
import { Linea } from "@thirdweb-dev/chains";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  const activeChain = Linea;

  return (
    <ThirdwebProvider activeChain={activeChain} clientId={process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!}>
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
