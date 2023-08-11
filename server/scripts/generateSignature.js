const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")
const { keccak256 } = require("ethereum-cryptography/keccak.js")
const { utf8ToBytes } = require("ethereum-cryptography/utils.js")

async function generateSignature(privateKey) {
    const messageHash = keccak256(utf8ToBytes(""))
    const signature = secp256k1.sign(messageHash, privateKey)

    return signature.toCompactHex()
}

module.exports = generateSignature