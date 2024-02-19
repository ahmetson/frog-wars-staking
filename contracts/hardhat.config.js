require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-deploy");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.11",
  settings: {
    optimizer: {
      enabled: true,
      runs: 10,
    }
  },
  networks: {
    sepolia: {
      chainId: 11155111,
      url: "https://eth-sepolia.public.blastapi.io",
      accounts: [process.env.PRIVATE_KEY],
    },
    linea: {
      chainId: 59144,
      url: "https://1rpc.io/linea",
      accounts: [process.env.PRIVATE_KEY],
    },
    lineaTestnet: {
      chainId: 59140,
      url: "https://rpc.goerli.linea.build",
      accounts: [process.env.PRIVATE_KEY]
    }
  },
  namedAccounts: {
    deployer: {
      default: 0 // here this will by default take the first account as deployer
    }
  }
};
