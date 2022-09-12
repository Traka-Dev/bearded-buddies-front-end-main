declare const window: any;

export  async function connectAccount() {
    try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
      }
}

