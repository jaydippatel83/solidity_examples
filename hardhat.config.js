require("@nomiclabs/hardhat-waffle");
require("dotenv").config({ path: ".env" });

// const QUICKNODE_RPC_URL = process.env.QUICKNODE_RPC_URL; 
const MUMBAI_RPC_URL = `https://eth-goerli.g.alchemy.com/v2/${process.env.MUMBAI_RPC_URL}`; 
 

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const POLYGONSCAN_KEY = process.env.POLYGONSCAN_KEY;

module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: MUMBAI_RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};