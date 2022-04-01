require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-vyper");
// Go to https://www.alchemyapi.io, sign up, create
// a new App in its dashboard, and replace "KEY" with its key
const ALCHEMY_API_KEY = "yGANgZf2huGLTq0gJgVphfO9TkIbVSrm";

// Replace this private key with your Ropsten account private key
// To export your private key from Metamask, open Metamask and
// go to Account Details > Export Private Key
// Be aware of NEVER putting real Ether into testing accounts
const ROPSTEN_PRIVATE_KEY = "2da91d3d96a3c23b43ad7b2fac2f782367f79579caeaceea7b3a107c1469b9d1";



module.exports = {
  vyper: "0.2.0",
  networks: {
    ropsten: {
      url: `https://eth-ropsten.alchemyapi.io/v2/${ALCHEMY_API_KEY}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};