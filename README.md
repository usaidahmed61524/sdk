
# Mango Domain Validate SDK 👋

Mango Domain Validate Integration SDK provides a lightweight and secure SDK providing seamless user authentication using Mango Domains.


## Installation

### Node Package

#### Install mango-domain-validate npm

```bash
  npm i mango-domain-validate
```
    
## Add and initialize the Mango Domain Validate SDK 

#### Initialize

```bash
import MangoDomainValidator from "mango-domain-validate/sdk/domain-checker-sdk";

// Initialize the SDK
const mangoDomain = new MangoDomainValidator();
```
    
## Sign in existing users


#### Login with mmit domain

```bash
try {
const result = await mangoDomain.validateUser(domain, tokenId);
console.log(result.data);
} catch (error) {
console.log(error)
}
```


#### Output success ⤵️

```bash

{
"success": true,
"message": "User validated"
}
```


#### Output Failure ⤵️

```bash

{
"success": false,
"message": "Credentials Not Valid"
}
```
