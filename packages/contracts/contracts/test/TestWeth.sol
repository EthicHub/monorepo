// SPDX-License-Identifier: UNLICENSED
pragma solidity 0.8.11;

import './TestERC20.sol';

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/* This token is ONLY useful for testing
 * Anybody can mint as many tokens as they like
 * Anybody can burn anyone else's tokens
 */
contract WETH is TestERC20 {
    constructor() TestERC20() {}

    receive() external payable {}

    event  Deposit(address indexed dst, uint wad);
    event  Withdrawal(address indexed src, uint wad);

    function deposit() public payable {
        _mint(msg.sender, msg.value);
        emit Deposit(msg.sender, msg.value);
    }
    
    function withdraw(uint wad) public {
        _burn(msg.sender, wad);
        emit Withdrawal(msg.sender, wad);
    }
}
