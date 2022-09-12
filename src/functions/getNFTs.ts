import Web3 from "web3";
import { bearedAddress } from "../constants/contractAddresses";
import bearedABI from "../abi/Beared.json";
import bearedABIDev from "../abi/bearedDev.json";
import checkChain from "./checkChain";
const web3 = new Web3(Web3.givenProvider);

export async function getNfts(account: string) {
  const chainId = await checkChain();
  let bearedListReq, bearedList;
  if (chainId == "0x1" || chainId == "0x4") {
    const bearedContract = new web3.eth.Contract(
      bearedABI as any,
      bearedAddress
    );
    try {
      bearedListReq = await bearedContract.methods
        .walletOfOwner(account)
        .call();
      return (bearedList = bearedListReq);
    } catch (e: any) {
      console.log(e);
    }
  }
  if (chainId == "0x4") {
    const bearedContract = new web3.eth.Contract(
      bearedABIDev as any,
      bearedAddress
    );
    try {
      bearedListReq = await bearedContract.methods
        .walletOfOwner(account)
        .call();
      return (bearedList = bearedListReq);
    } catch (e: any) {
      console.log(e);
    }
  }
}
