declare const window: any;
export default async function checkChain() {
    if (typeof window.ethereum != "undefined") {
        let chainId = await window.ethereum.chainId;
        return chainId;
    }
}