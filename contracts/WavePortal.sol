//SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.17;

import "hardhat/console.sol";

contract WavePortal {

    uint256 yourTotalLove;
    constructor() {
        console.log("Hi! You have successfully run a smart contract! Congratulations!");
    }


    function sendingLove() public{

        yourTotalLove += 1;
        console.log("%s has waved at you",msg.sender);

    }

    function yourWorldisFullofLove() public view returns (uint256) {
        console.log("We have %d total waves",yourTotalLove);
        return yourTotalLove;

    }

}