// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.1/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.1/contracts/access/Ownable.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v5.0.1/contracts/utils/Counters.sol";

/**
 * @title MyNFT
 * @dev A basic ERC721 Non-Fungible Token contract.
 * This contract allows the owner to mint new tokens.
 * It uses OpenZeppelin contracts for standards and security.
 */
contract MyNFT is ERC721, Ownable {
    // Using OpenZeppelin's Counters library to safely manage token IDs.
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    /**
     * @dev The constructor initializes the NFT collection.
     * @param initialOwner The address that will initially own the contract.
     */
    constructor(address initialOwner)
        ERC721("MyFirstNFT", "MFNFT") // Sets the collection name and symbol.
        Ownable(initialOwner) // Sets the contract owner.
    {}

    /**
     * @dev Mints a new NFT and assigns it to a specified address.
     * This function can only be called by the contract owner.
     * @param to The address to receive the newly minted NFT.
     * @param uri The URI for the token's metadata (a JSON file).
     */
    function safeMint(address to, string memory uri) public onlyOwner {
        // Get the current token ID, which will be 0 for the first mint, 1 for the second, etc.
        uint256 tokenId = _tokenIdCounter.current();
       
        // Increment the counter for the next mint.
        _tokenIdCounter.increment();
       
        // The core minting function. It creates the token and assigns it.
        _safeMint(to, tokenId);
       
        // Set the metadata URI for the newly created token.
        _setTokenURI(tokenId, uri);
    }

    /**
     * @dev Returns the base URI for the token metadata.
     * In this basic contract, we don't use a base URI, but it's often
     * overridden for more complex projects where metadata URIs follow a pattern.
     */
    function _baseURI() internal pure override returns (string memory) {
        return "";
    }
}
