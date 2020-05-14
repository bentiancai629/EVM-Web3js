var Web3 = require('web3');


var web3

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
}else{
    // set the provider you want fro Web3.providers
    web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/74ce7b1c7a104effb6ab0b86ff09eaf0"));
}

module.exports = web3;