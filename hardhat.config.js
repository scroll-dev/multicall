require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "l2geth",
  networks: {
    l1geth: {
      url: "http://localhost:8544"
    },
    l2geth: {
      url: "http://localhost:8545"
    }
  },
  solidity: "0.5.16",
  paths: {
    sources: "./src",
  }
};
