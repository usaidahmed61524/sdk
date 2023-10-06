const express = require("express");
const cors = require("cors");
const signInWithDomainAndTokenId = require("./sdk/domain-checker-sdk");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

new signInWithDomainAndTokenId();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SDK is running on port ${PORT}`);
});
