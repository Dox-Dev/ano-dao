import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import "dotenv/config"

const ARBITRUM_SEPOLIA_URL: string = process.env.ARBITRUM_SEPOLIA_URL ?? ""; // added ?? "" for null safety (since value can possibly be null)
const WALLET_PRIVATE_KEY: string = process.env.WALLET_PRIVATE_KEY ?? "";


const config: HardhatUserConfig = {
  solidity: "0.8.24",

  networks:{
    // network name here was used in `package.json`
    // particularly in the `hhcompile` script
    arbitrumSepolia: {
      url: ARBITRUM_SEPOLIA_URL,  // https://chainlist.org/chain/421614 - check here what RPCs are available
      accounts: [WALLET_PRIVATE_KEY], // people who will pay for txn (private key)
                                      // Important: These should be ENVIRONMENT VARIABLES
      chainId: 421614,  // specific for other layers of ETH chain
                        // chainId = L2 (layer2) of Ethereum
    },
  }
};

export default config;