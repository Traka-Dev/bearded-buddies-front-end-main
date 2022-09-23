import {createState} from '@hookstate/core'
import MintObjectProps from '../@types/mintObject'
import nftObjectProps from '../@types/nftObject'

const defaultMint: MintObjectProps = {
    hash: '',
    receipt: '',
    error: ''
  }

  const  defaultNFT:  nftObjectProps = {
    id: '',
    image: '',
    text: ''
  }

const store = createState({
    mintValue: 1,
    mintObject : defaultMint,
    price: 80000000000000000,
    isLoading: false,
    isLoadingNft: false,
    noNfts: false,
    isSuccess: false,
    isError: false,
    isShowingMint: false,
    isShowingCollection: false,
    nftIdList: [],
    nftURLs: [] as String[],
    nftObject: defaultNFT,
    nftImages: [] as String[]
})

export default store;