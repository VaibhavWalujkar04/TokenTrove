import React, { useEffect, useState } from 'react';
import NFTCard from './NFTCard';

const ExploreFeed = () => {
    const [nfts, setNfts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchNFTs = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:5000/api/nft/explore');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log('Fetched NFTs:', data); // Log the fetched data
            setNfts(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    
    useEffect(() => {
        fetchNFTs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    
    return (
        <div>
            {nfts && Array.isArray(nfts) && nfts.length > 0 ? (
                nfts.map((nft) => (
                    <NFTCard key={nft.title} nft={nft} /> // Use a unique key from nft
                ))
            ) : (
                <div>No NFTs available.</div>
            )}
        </div>
    );
};

export default ExploreFeed;
