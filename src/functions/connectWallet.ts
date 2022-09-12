import Web3 from "web3";
import checkChain from "./checkChain";
const web3 = new Web3(Web3.givenProvider);
declare var window: any;
export async function connectWallet() {
  const chain = await checkChain();
  if (process.env.NODE_ENV == "production") {
    if (window.ethereum != "undefined") {
      if (chain == "0x1") {
        window.ethereum.request({ method: "eth_requestAccounts" });
      }
    }
  }
  if (process.env.NODE_ENV == "development") {
    if (window.ethereum != "undefined") {
      if (chain == "0x4") {
        window.ethereum.request({ method: "eth_requestAccounts" });
      }
    }
  }
}
