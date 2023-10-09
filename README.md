Mango Domain Validation Integration SDK Reference

Version 0.2.0

Description: Mango Domain Validate Integration SDK provides a lightweight and secure SDK providing seamless user authentication using Mango Domains.

npm package : npm i mango-domain-validate

Add and initialize the Mango Domain Validate SDK

> Initialize ⤵️

import MangoDomainValidator from "mango-domain-validate/sdk/domain-checker-sdk";

// Initialize the SDK
const mangoDomain = new MangoDomainValidator();

Login with mmit domain ⤵️
try {
const result = await mangoDomain.validateUser(domain, tokenId);
console.log(result.data);
} catch (error) {
console.log(error)
}

Output success ⤵️
{
"success": true,
"message": "User validated"
}

Output Failure ⤵️
{
"success": false,
"message": "Credentials Not Valid"
}
