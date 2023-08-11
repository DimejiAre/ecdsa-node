const { secp256k1 } = require("ethereum-cryptography/secp256k1.js")
const { keccak256 } = require("ethereum-cryptography/keccak.js")
const { toHex } = require("ethereum-cryptography/utils.js")
const generateSignature = require("./generateSignature")

async function generateAccount() {
    const privateKey = secp256k1.utils.randomPrivateKey()
    const publicKey = secp256k1.getPublicKey(privateKey).slice(1)
    const address = `0x${toHex(keccak256(publicKey).slice(-20))}`
    const signature = await generateSignature(privateKey)

    const account = {
        privateKey: toHex(privateKey),
        address: address,
        signature
    }
    console.log(account)
    return account
}

generateAccount()