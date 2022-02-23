const { ethers } = require("hardhat");

async function main() {
	const nftContract = await ethers.getContractFactory("GameItem");
	const deployedNFTContract = await nftContract.deploy();
	console.log("NFT Contract Address: ", deployedNFTContract.address);
}

main()
	.then(() => process.exit(0))
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
