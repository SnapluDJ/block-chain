const { Blockchain, Transaction } = require("./blockchain");

const EC = require("elliptic").ec;
const ec = new EC("secp256k1");

const myKey = ec.keyFromPrivate(
  "c2b381db48612deca24efd7b2af05a33f6ddd3147c8d81d151346e8feb06082f"
);
const myWalletAddress = myKey.getPublic("hex");

const galleonCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, "other person public key", 10);
tx1.signTransaction(myKey);
galleonCoin.addTransaction(tx1);

// const tx2 = new Transaction(myWalletAddress, "other wallet", 100);
// tx2.signTransaction(myKey);
// galleonCoin.addTransaction(tx2);

console.log("\nStarting the miner...");
galleonCoin.minePendingTransactions(myWalletAddress);
console.log(
  "\nBalance of snpalu is",
  galleonCoin.getBalanceOfAddress(myWalletAddress)
);

// console.log("\nStarting the miner...");
// galleonCoin.minePendingTransactions("snaplu-address");
// console.log(
//   "\nBalance of snpalu is",
//   galleonCoin.getBalanceOfAddress(myWalletAddress)
// );

console.log(galleonCoin.isChainValid());
