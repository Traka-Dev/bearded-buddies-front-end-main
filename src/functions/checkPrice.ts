import Web3 from "web3";
import checkChain from "./checkChain";
import { bearedAddress } from "../constants/contractAddresses";
import bearedABI from "../abi/Beared.json";
import bearedABIDev from "../abi/bearedDev.json";

const web3 = new Web3(Web3.givenProvider);

const bearedContract = new web3.eth.Contract(bearedABI as any, bearedAddress);

const bearedContractDev = new web3.eth.Contract(
  bearedABIDev as any,
  bearedAddress
);

export default async function checkPrice(account: string) {
  const chainId = await checkChain();
  if (chainId == "0x1") {
    try {
      const cost = await bearedContract.methods.getMintingPrice(account).call();
      return cost;
    } catch (e: any) {
      console.log(e);
    }
  }
  if (chainId == "0x4") {
    try {
      const cost = await bearedContractDev.methods
        .getMintingPrice(account)
        .call();
      return cost;
    } catch (e: any) {
      console.log(e);
    }
  }
}
