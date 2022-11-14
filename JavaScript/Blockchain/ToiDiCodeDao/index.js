const hash = require("crypto-js/sha256");
class Block {
  constructor(prevHash, data) {
    this.prevHash = prevHash;
    this.data = data;
    this.timeStamp = new Date();
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return hash(this.prevHash + JSON.stringify(this.data + this.timeStamp)).toString();
  }
}

// const block = new Block("", {
//   hello: "world",
// });

// console.log(block);

class Blockchain {
  constructor() {
    const genesisBlock = new Block("0000", { isGenesis: true });
    this.chain = [genesisBlock];
  }

  getLastBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(data) {
    const lastBlock = this.getLastBlock();
    const newBlock = new Block(lastBlock.hash, data);
    this.chain.push(newBlock);
  }
}

const huyChain = new Blockchain();

console.log(huyChain);
console.log("================================");

huyChain.addBlock({
  from: "QuocHuy",
  to: "dev",
  amount: 100,
});
huyChain.addBlock({
  from: "QuocHuy",
  to: "ThaoAnh",
  amount: 300,
});

console.log(huyChain.chain);
