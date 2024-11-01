import React from 'react';
import './HomePage.css';
import NFTCard from './NFTCard'; // Placeholder NFT cards

const HomePage = () => {
  return (
    <div className="homepage">
      <header className="header">
        <h1>NFT Marketplace</h1>
        <nav>
          <a href="/explore">Explore</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
          <a href="/profile">Profile</a>
        </nav>
      </header>

      <section className="hero">
        <h2>Discover, Buy, and Sell NFTs</h2>
        <p>The premier marketplace for unique digital assets</p>
        <a href="/explore" className="cta-button">Explore NFTs</a>
      </section>

      <section className="popular-nfts">
        <h2>Popular NFTs</h2>
        <div className="nft-grid">
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
      </section>

      <footer className="footer">
        <p>Contact us at contact@nftmarketplace.com</p>
        <p>Follow us on social media</p>
      </footer>
    </div>
  );
};

export default HomePage;
