// Mock NFT data
const nfts = [
  { id: 1, name: 'Rare Artwork', price: 0.1, minBid: 0.05 },
  { id: 2, name: 'Limited Edition', price: 0.2, minBid: 0.1 }
];

// Display NFTs
function displayNFTs() {
  const container = document.getElementById('nft-list');
  nfts.forEach(nft => {
    container.innerHTML += `
      <div class="nft-card">
        <img src="https://via.placeholder.com/300" class="nft-image">
        <h3>${nft.name}</h3>
        <p>Current Bid: ${nft.price} ETH</p>
        <form class="bid-form" onsubmit="placeBid(event, ${nft.id})">
          <input type="number" placeholder="Enter bid amount">
          <button type="submit">Place Bid</button>
        </form>
      </div>
    `;
  });
}

// Place bid (fake)
function placeBid(event, id) {
  event.preventDefault();
  const amount = event.target.querySelector('input').value;
  
  // Simulate bid processing
  setTimeout(() => {
    alert(`Bid placed successfully!\n${amount} ETH bid for ${nft.name}`);
  }, 1000);
  
  // Reset form
  event.target.reset();
}

// Initialize
document.addEventListener('DOMContentLoaded', displayNFTs);
