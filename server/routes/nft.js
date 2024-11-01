const express = require('express');
const router = express.Router();
const NFT = require('../models/NFT');

// POST an NFT
router.post('/add', async (req, res) => {
    try {
        const newNFT = new NFT({
            title: req.body.title,
            description: req.body.description,
            image: req.body.image, // Placeholder, replace with actual image handling
            price: req.body.price,
            creator: req.user.id // Assuming user ID is in JWT or session
        });
        const savedNFT = await newNFT.save();
        res.status(201).json(savedNFT);
    } catch (error) {
        res.status(500).json({ error: 'Failed to add NFT' });
    }
});

// GET all NFTs for explore feed
router.get('/explore', async (req, res) => {
    try {
        const nfts = await NFT.find().populate('creator', 'username');
        
        const nftsWithCreator = nfts.map(nft => ({
            title: nft.title,
            description: nft.description,
            image: nft.image,
            price: nft.price,
            dateCreated: nft.dateCreated,
            creator: { username: nft.creator.username }
        }));

        res.status(200).json(nftsWithCreator);
    } catch (error) {
        console.error('Error fetching NFTs:', error); // Log the error
        res.status(500).json({ error: 'Failed to fetch NFTs' });
    }
});


module.exports = router;
