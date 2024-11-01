import React from 'react';
import './NFTCard.css';

const NFTCard = ({ nft }) => {
  if (!nft) return null; //Handle undefined nft gracefully

  return (
    <div className="nft-card">
      <img src={nft.image} alt={nft.title} className="nft-image" />
      <h3>{nft.title}</h3>
      <p>{nft.description}</p>
      <p>Price: ${nft.price}</p>
      <p>Creator: {nft.creator.username}</p>
    </div>
  );
};

export default NFTCard;
