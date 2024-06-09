const ethers = require('ethers')
const utils = require("./utils");

/**
 *  以太坊测试网络  sepolia
 *  https://sepolia.etherscan.io/token/0xf531b8f309be94191af87605cfbf600d71c2cfe0#code
 * */

const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/3af47557b8b74d1c87a18cdec02acb0e');
(async function () {
    let balance = await utils.getBalance(provider,'0x1F98431c8aD98523631AE4a59f267346ea31F984')
    console.log('balance:'+balance)
})()