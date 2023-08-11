import { keccak256 } from "ethereum-cryptography/keccak.js";
import { secp256k1 } from "ethereum-cryptography/secp256k1";
import { toHex, utf8ToBytes } from "ethereum-cryptography/utils.js";


export const getAddressFromSignature = async (signature) => {
    if (!signature) return null
    try {
        const messageHash = keccak256(utf8ToBytes(""))
        let sig = secp256k1.Signature.fromCompact(signature).addRecoveryBit(1)
        const publicKey = sig.recoverPublicKey(messageHash).toRawBytes()
        const address = `0x${toHex(keccak256(publicKey.slice(1)).slice(-20))}`
        return address
    } catch (error) {
        return null
    }
}