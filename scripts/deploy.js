 
const { BigNumber } = require("ethers");
const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  // Deploy FakeNFT Contract
  const TaxToken = await ethers.getContractFactory("TaxToken");
  const taxToken = await TaxToken.deploy();
  await taxToken.deployed(); 
  console.log("Address of TaxToken Contract:", taxToken.address);
  
}

main();