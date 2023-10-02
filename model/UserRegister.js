const mongoose = require("mongoose");
const userToAddressSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  accountAddress: {
    type: String,
    required: true,
    unique: true,
  },
  tokenId: { type: String },
  txhash: {
    type: String,
  },
  timestamp: {
    type: String,
  },
});
const UserToAddressData = mongoose.model("UserToAddress", userToAddressSchema);

module.exports = UserToAddressData;
