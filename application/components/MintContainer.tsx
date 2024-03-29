import { Web3Button } from "@thirdweb-dev/react";
import Image from "next/image";
import { CHARACTER_EDITION_ADDRESS } from "../const/contractAddresses";
import styles from "../styles/Home.module.css";

export default function MintContainer() {
  return (
    <div className={styles.collectionContainer}>
      <h1>Frog Wars - Hunger for Power!</h1>
      <p>Claim FREE Comic Book NFT to start playing!</p>

      <div className={`${styles.nftBox} ${styles.spacerBottom}`}>
        <Image src="/book.jpg" width={"120"} height={"200"} alt="mine" />
      </div>

      <div className={styles.smallMargin}>
        <Web3Button
          theme="dark"
          contractAddress={CHARACTER_EDITION_ADDRESS}
          action={(contract) => contract.erc1155.claim(1, 1)}
        >
          FREE CLAIM
          (Marketplace minter fee 0.0001ETH)
        </Web3Button>
      </div>
    </div>
  );
}
