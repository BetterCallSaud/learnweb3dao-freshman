// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract GameItem is ERC721 {
    constructor () ERC721("GameItem", "ITM") {
        // Just the one NFT for myself hehe
        _mint(msg.sender, 1);
    }
}