import {mainChainDetails, testChainDetails} from "../constants/chainDetails"

export default function handleWrongChain(chain: string): boolean{
        if(chain !== mainChainDetails.chainId || chain !== testChainDetails.chainId ){
            return true;
        }else {
            return false;}
}