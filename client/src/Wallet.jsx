import server from "./server";

function Wallet({ address, setAddress, balance, setBalance, signature, setSignature }) {
  async function onChange(evt) {
    const address = evt.target.value;
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  async function updateSignature(evt){
    const signatureValue = evt.target.value;
    setSignature(signatureValue)
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Wallet Address
        <input placeholder="Type an address, for example: 0x1" value={address} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>

      <label>
        Signature
        <input placeholder="Enter Signature..." value={signature} onChange={updateSignature}></input>
      </label>
    </div>
  );
}

export default Wallet;
