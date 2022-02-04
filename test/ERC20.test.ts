import { ethers } from "hardhat";
import { expect } from "chai";
import { ContractFactory, Contract } from "ethers";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

describe("ERC20", async () => {
  let erc20Mock: Contract;
  let deployer: SignerWithAddress;
  let other1: SignerWithAddress;
  let other2: SignerWithAddress;

  beforeEach(async () => {
    // Deploy ERC20Mock
    const ERC20Mock: ContractFactory = await ethers.getContractFactory("ERC20Mock");
    erc20Mock = await ERC20Mock.deploy("MOCK Coin", "MOCK", 6);
    await erc20Mock.deployed();

    // Get user accounts
    [deployer, other1, other2] = await ethers.getSigners();
  });

  it("Approve executes successfully", async () => {
    const tokenAmount: number = 100;
    const tx_result = await erc20Mock.connect(other1).approve(other2.address, tokenAmount);
    await tx_result.wait();
    expect(await erc20Mock.allowance(other1.address, other2.address))
      .to.equal(tokenAmount);
  });
});
