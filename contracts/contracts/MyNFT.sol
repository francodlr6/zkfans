// SPDX-License-Identifier: MIT
pragma solidity ^0.8.11;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";

contract MyNFT is ERC721Enumerable {
    string private baseURI;
    uint256 public maxAmount = 5;
    uint256 private counter = 0;

    constructor(string memory _baseuri) ERC721("MyNFT", "MNFT") {
        baseURI = _baseuri;
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function mint(address to) public returns (uint256) {
        require(counter < maxAmount, "All already minted"); // Changed comparison

        uint256 newItemId = counter + 1;
        _mint(to, newItemId);

        counter = newItemId;

        return newItemId;
    }
}
