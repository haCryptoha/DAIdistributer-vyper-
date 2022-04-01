const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Distributer", function () {
  it("Should return the new distributer once it's changed", async function () {
    const [owner, charity, seller, startup, bot, broker] = await ethers.getSigners();
	const Distributer = await ethers.getContractFactory("distribute");
    const distributer = await Distributer.deploy(charity.address, seller.address, startup.address, broker.address, bot.address);
    await distributer.deployed();
	await distributer.swap(100);
	var event = distributer.Transfer(function(error, result) {
    if (!error) {
        var args = result.returnValues;
        console.log('value transferred = ', args.sendamount);
    }
   
    
	console.log(owner)
  });
});
