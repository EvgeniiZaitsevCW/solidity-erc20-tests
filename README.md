# solidity-erc20-tests
Tests for a typical ERC20 Solidity contract


Just a sandbox to play with ERC20 contracts with [Hardhat tools](https://hardhat.org/)

To set up the project run: `npm install`

After setting up to run tests use:
* on internal Hardhat network: `npx hardhat test`
* on Substrate network: `npx hardhat test --network substrate`
* the same for a single test file: `npx hardhat --network substrate test test/ERC20.test.ts`

You can set other networks to run in the [hardhat.config.ts](hardhat.config.ts)