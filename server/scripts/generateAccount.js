const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")
const { keccak256 } = require("ethereum-cryptography/keccak.js")
const { toHex } = require("ethereum-cryptography/utils.js")

async function generateAccount() {
    const privateKey = toHex(secp256k1.utils.randomPrivateKey())
    const publicKey = secp256k1.getPublicKey(privateKey).slice(1)
    const address = `0x${toHex(keccak256(publicKey).slice(-20))}`

    const account = {
        privateKey,
        address: address
    }
    console.log(account)
    return account
}

generateAccount()