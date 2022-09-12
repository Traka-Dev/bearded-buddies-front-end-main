declare const window: any;

export default async function checkAccount()  {
    if (typeof window.ethereum != "undefined") {
        return await window.ethereum?.selectedAddress
    }else {
        return '';
    }
}