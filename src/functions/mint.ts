import Web3 from "web3";
import checkChain from "./checkChain";
import { bearedAddress } from "../constants/contractAddresses";
import bearedABI from "../abi/Beared.json";
import bearedABIDev from "../abi/bearedDev.json";
import checkPrice from "./checkPrice";
const web3 = new Web3(Web3.givenProvider);
declare const window: any;
interface MintProps {
  hash: string | null;
  receipt: string | null;
  error: string | null;
}

const bearedContractDev = new web3.eth.Contract(
  bearedABIDev as any,
  bearedAddress
);
export async function mint(quantity: any, account: string): Promise<any> {
  const chain = await checkChain();
  console.log(chain, "chain");
  let mintReq, mintRes;
  let mintObj: MintProps = {
    hash: "",
    receipt: "",
    error: "",
  };
  if (chain == "0x1") {
    const bearedContract = new web3.eth.Contract(
      bearedABI as any,
      bearedAddress
    );
    const price = await checkPrice(window.ethereum?.selectedAddress);
    try {
      mintReq = await bearedContract.methods
        .requestCreation(quantity)
        .send({ from: account, value: quantity * price })
        .on("transactionHash", (hash: any) => {
          mintObj.hash = hash;
        })
        .on("receipt", (receipt: any) => {
          mintObj.receipt = receipt;
        });
    } catch (e: any) {
      console.log(e);
      mintObj.error = e;
    }
    return mintObj;
  }
  if (chain == "0x4") {
    const bearedContractDev = new web3.eth.Contract(
      bearedABIDev as any,
      bearedAddress
    );
    const price = await checkPrice(window.ethereum?.selectedAddress);
    try {
      mintReq = await bearedContractDev.methods
        .requestCreation(quantity)
        .send({ from: account, value: quantity * price })
        .on("transactionHash", (hash: any) => {
          mintObj.hash = hash;
        })
        .on("receipt", (receipt: any) => {
          mintObj.receipt = receipt;
        });
    } catch (e: any) {
      console.log(e);
      mintObj.error = e;
    }
    return mintObj;
  }
}
