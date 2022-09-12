import ChainDetailsType from "../@types/chainDetails"

export const mainChainDetails : ChainDetailsType = {
    chainId: '0x1', 
    chainName: "Ethereum Mainnet",
    nativeCurrency: {
        name: 'ETH',
        decimals: 18
    },
    blockExplorerUrls: 'https://etherscan.io/'
}

export const testChainDetails: ChainDetailsType= {
    chainId: '0x4',
    chainName: 'Rinkeby',
    nativeCurrency: {
        name: 'ETH',
        decimals: 18
    },
    blockExplorerUrls: 'https://rinkeby.etherscan.io/'
}