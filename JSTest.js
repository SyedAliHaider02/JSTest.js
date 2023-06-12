// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
// Ṇconsole.log("Enter the number of NFTs to mint:"


const NFTs=[]
function mintNFT(_name,_color,_type) 
{
     const nft={
               "name":_name,
               "color":_color,
               "type":_type
     }
     NFTs.push(nft);
     console.log("Minted: "+ _name);

}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
  for(let i=0; i<NFTs.length;i++)
  {
      console.log(NFTs[i]);
  }

}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
  console.log(NFTs.length);

}

// call your functions below this line
mintNFT("jimmy","blue","sticker");
mintNFT("josh","black","card");
mintNFT("jhon","yellow","chain");
mintNFT("jack","green","belt");
listNFTs();
getTotalSupply();
