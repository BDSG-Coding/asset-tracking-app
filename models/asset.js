const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const assetSchema = new Schema({
  modelNumber: { type: String, required: true },
  serialNumber: { type: String, required: true },
  assetTag: { type: String, required: true },
  IPaddress: { type: String, required: true },
  rackId: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

const Asset = mongoose.model("Asset", assetSchema);

module.exports = Asset;
