export default interface ChainDetailsType {
    chainId: string; // A 0x-prefixed hexadecimal string
    chainName: string;
    nativeCurrency: {
      name: string;
      decimals: 18;
    };
    blockExplorerUrls?: string;
  }