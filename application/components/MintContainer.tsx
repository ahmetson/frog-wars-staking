import { Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function MintContainer() {
  return (
    <div className={styles.collectionContainer}>
      <h1>Frog Wars - BURN BABY, BURN!</h1>
      <p>MINT FROG WARS COMIC BOOK EDITION 2 NFT to start playing!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <Image src="/book.jpg" width={"120"} height={"200"} alt="mine" />
      </div>

      <div className={styles.smallMargin}>
        <Web3Button
          theme="dark"
          contractAddress={CHARACTER_EDITION_ADDRESS}
          action={(contract) => contract.erc1155.claim(2, 1)}
        >
          MINT 
        </Web3Button>
      </div>
    </div>
  );
}
