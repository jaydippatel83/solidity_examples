const { expect } = require("chai");
const { BigNumber } = require("ethers");
const { ethers, waffle } = require("hardhat");

describe("Attack", function () {
    it("transfer", async function () {
        // Deploy the Attack contract
        const attackContract = await ethers.getContractFactory("TaxToken");
        const _attackContract = await attackContract.deploy();
        await _attackContract.deployed();
        console.log("Attack Contract's Address", _attackContract.address);
        const amt = 10000000000; 
        const add = await _attackContract.mintToken(100000);
        await add.wait();
        console.log(add, "total supply");
        const res = await _attackContract.transfer(0x73426923AF5FdaDa87c6a3662E3d9253b87AC084, 240);

        console.log(res, "res");

       const supply =  _attackContract.totalSupply();
       console.log(supply,"supply");

       const balance = _attackContract.balanceOf("0xfB5C5f3d07ac7551c765E0dB128738755A1a7Efe");
       console.log(balance,"balance");

       const bala = _attackContract.balanceOf("0x73426923AF5FdaDa87c6a3662E3d9253b87AC084");
       console.log(bala,"bala");


    });
});