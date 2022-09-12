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
    mintValue: 0,
    mintObject : defaultMint,
    price: 0,
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