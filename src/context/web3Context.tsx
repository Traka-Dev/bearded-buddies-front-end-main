import React, { createContext, useState, useEffect } from 'react';
import checkAccount from '../functions/checkAccount';
import checkChain from '../functions/checkChain';
import handleWrongChain from '../functions/handleWrongChain';
import { mainChainDetails, testChainDetails } from "../constants/chainDetails"
import nftObjectProps,{ nftObjectPropsArray} from '../@types/nftObject'

declare const window: any;
interface ConnectType {
    chain: string;
    account: string;
    connected: boolean;
    wrongChain: boolean;

}
const defaultConnect: ConnectType = {
    chain: '',
    account: '',
    connected: false,
    wrongChain: false
}



export const Web3Context = createContext<ConnectType>(defaultConnect);

const Web3Provider = ({ children }: any) => {
    const [chain, setChain] = useState<string>('');
    const [account, setAccount] = useState<string>('');
    const [connected, setConnected] = useState<boolean>(false);
    const [wrongChain, setWrongChain] = useState<boolean>(false);
    
    useEffect(() => {
        if(window.ethereum !== 'undefined'){
            checkChain().then(chain => setChain(chain))
            if(process.env.NODE_ENV ===  'production'){
                if (chain === mainChainDetails.chainId || chain === testChainDetails.chainId ) {
                    setWrongChain(false)
                    checkAccount().then(account => {
                        if (account === '') {
                            setConnected(false);
                        }
                        if (account) {
                            setAccount(account)
                            setConnected(true)
                        }
                    })
                }
                
                if (chain !== mainChainDetails.chainId || chain !== testChainDetails.chainId) {
                    setWrongChain(true);
                    setConnected(false)
                    setAccount('')
                }
                window.ethereum?.on('chainChanged', (_chain: string) => {
                    setWrongChain(handleWrongChain(_chain))
                })
                window.ethereum?.on('accountsChanged', async () => {
                    const currentAccount = await checkAccount()
                    setAccount(currentAccount);
                    if(wrongChain === false){
                        setConnected(true)
                    }
                })
            }
            if(process.env.NODE_ENV === 'development'){
                if (chain === mainChainDetails.chainId ||  chain === testChainDetails.chainId ) {
                    setWrongChain(false)
                    checkAccount().then(account => {
                        if (account ==='') {
                            setConnected(false);
                        }
                        if (account) {
                            setAccount(account)
                            setConnected(true)
                        }
                    })
                }

                if (chain === mainChainDetails.chainId || chain === testChainDetails.chainId) {
                    setWrongChain(false);
                    setConnected(true)
                    setAccount('')
                }
                if(chain !== mainChainDetails.chainId || chain !== testChainDetails.chainId){
                    setWrongChain(true)
                }
                window.ethereum?.on('chainChanged', (_chain: string) => {
                    if(_chain !== mainChainDetails.chainId || _chain !== testChainDetails.chainId){
                    setWrongChain(true)
                    }
                    if(_chain === mainChainDetails.chainId || _chain !== testChainDetails.chainId){
                        setWrongChain(false)
                    }
                })
                window.ethereum?.on('accountsChanged', async () => {
                    const currentAccount = await checkAccount()
                    setAccount(currentAccount);
                    if(!wrongChain){
                        setConnected(true)
                        setWrongChain(false)
                    }
                })
            }
             
        }
        
        
    }, [account, chain, connected, wrongChain] )

    return <Web3Context.Provider value={{ chain, account, connected, wrongChain }}>{children}</Web3Context.Provider>;

}

export default Web3Provider;