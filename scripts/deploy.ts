import { ethers } from "hardhat";

async function main() {
  //const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  //const unlockTime = currentTimestampInSeconds + 60;
//
  //const lockedAmount = ethers.parseEther("0.001");

  const token = await ethers.deployContract("AnoTher", [
    "AnoTher",
    "AnoT",
    10000,
  ]);

  await token.waitForDeployment();

  console.log(`deployed to ${token.target}`);

  const dao = await ethers.deployContract("AnoDAO", [token.target, 100]);
  await dao.waitForDeployment();

  console.log(`deployed to ${dao.target}`);

  //console.log(
  //  `Lock with ${ethers.formatEther(
  //    lockedAmount
  //  )}ETH and unlock timestamp ${unlockTime} deployed to ${lock.target}`
  //);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
