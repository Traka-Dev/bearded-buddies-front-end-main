export default interface nftObjectProps {
    id: string;
    image: string;
    text: string;
}

export interface nftObjectPropsArray {
    nfts: nftObjectProps[]; 
}