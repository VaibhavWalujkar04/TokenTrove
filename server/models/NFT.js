const mongoose = require('mongoose');

const NFTSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String },
    image: { type: String, required: true }, // URL or Base64 for now
    price: { type: Number, required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('NFT', NFTSchema);
