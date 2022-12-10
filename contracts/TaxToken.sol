// SPDX-License-Identifier: MIT
pragma solidity 0.8.17; 

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TaxToken is ERC20{
    uint taxDivisior = 10;
    constructor() ERC20("TaxToken","TT"){}

    function mintToken(uint amount) public{
        _mint(msg.sender,amount);
    }

    function transfer(address to, uint amount) public override returns(bool) {

        uint balanceSender= balanceOf(msg.sender);
        require(balanceSender >= amount,"ERC20: Not enough Money to send"); 

        uint taxAmount = amount / taxDivisior;
        uint transferAmount = amount - taxAmount;

        _transfer(msg.sender,to, transferAmount);
        _transfer(msg.sender, address(0), taxAmount);  

        return true;
    }
}