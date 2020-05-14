var web3 = require('./getWeb3')
var BigNumber = require('bignumber.js');

var web3 

// 检查节点
// web3.eth.isSyncing().then(console.log)


// 创建账户
// web3.eth.accounts.create().then(
//     console.log()
// )

// 获取账户余额
web3.eth.getBalance('0x15a796e2c5A3BC8331D1392dcB88571bc2194D7b').then(function(balance){
    var b1 = new BigNumber(balance)
    var b2 = web3.utils.toBN(balance).toString();
    b3 = web3.utils.fromWei(b2, 'ether');
    console.log('账户余额:',b3,"eth")
})


// 使用私钥签名一个交易
// web3.eth.accounts.signTransaction({
//     to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
//     value: '10000000',
//     gas: 2000000
// }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
// .then(console.log);

// nonce原始签名交易
// web3.eth.accounts.signTransaction({
//     to: '0xF0109fC8DF283027b6285cc889F5aA624EaC1F55',
//     value: '1000000000',
//     gas: 2000000,
//     gasPrice: '234567897654321',
//     nonce: 0,
//     chainId: 1
// }, '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318')
// .then(console.log);

// 哈希一个消息
// web3.eth.accounts.hashMessage("Hello World")
// > "0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"

// // the below results in the same hash
// web3.eth.accounts.hashMessage(web3.utils.utf8ToHex("Hello World"))
// > "0xa1de988600a42c4b4ab089b619297c17d53cffae5d5120d82d8a92d0bb3b78f2"

//对内容用私钥签名
// web3.eth.accounts.sign('Some data', '0x4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318');
// > {
//     message: 'Some data',
//     messageHash: '0x1da44b586eb0729ff70a73c326926f6ed5a25f5b056e7f47fbc6e58d86871655',
//     v: '0x1c',
//     r: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd',
//     s: '0x6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a029',
//     signature: '0xb91467e570a6466aa9e9876cbcd013baba02900b8979d43fe208a4a4f339f5fd6007e74cd82e037b800186422fc2da167c747ef045e5d18a5f5d4300f8e1a0291c'
// }


// utils工具函数
var str = "abcABC";
var hstr = web3.utils.toHex(str);
console.log("Hex of Sring:" + hstr);

// 输入是不是16进制
var bool = web3.utils.isHex('0xc1912')
console.log("是否十六进制:",bool)

// 判断输入是不是一个地址
var bool = web3.utils.isAddress('0x15a796e2c5A3BC8331D1392dcB88571bc2194D7b');
console.log("是否eth地址:",bool)

// 把金额单位换成wei
web3.utils.toWei('1', 'ether');

// 把单位为wei的以太币换成 ether
web3.utils.fromWei('1', 'ether');

// 判断给定的数据是否是 BigNumber
var number = new BigNumber(10);
var bool = web3.utils.isBigNumber(number);
console.log("是否BigNumber:",bool)

// sha3算法
var a = web3.utils.sha3('231'); // taken as string
console.log("sha3:",a)