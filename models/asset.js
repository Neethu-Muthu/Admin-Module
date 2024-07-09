const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assetSchema = new Schema({
    assetName: { type: String, required: true },
    assetType: { type: String, required: true },
    model: { type: String, required: true },
    serialNumber: { type: String, required: true },
    purchaseDate: { type: Date, required: true },
    warranty: String,
    location: { type: String, required: true }
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = Asset;
