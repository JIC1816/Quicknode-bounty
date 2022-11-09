const { ethers } = require("hardhat");
require("dotenv").config({ path: ".env" });

async function main() {
  const NFTMinter = await ethers.getContractFactory("NFTMinter");
  const deployedNFTMinterContract = await NFTMinter.deploy(1, "Ronaldo", "CR7");

  await deployedNFTMinterContract.deployed();
  console.log("Verify Contract Address:", deployedNFTMinterContract.address);

  console.log("Sleeping.....");
  await sleep(40000);

  await hre.run("verify:verify", {
    address: deployedNFTMinterContract.address,
    constructorArguments: [1, "Ronaldo", "CR7"],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
