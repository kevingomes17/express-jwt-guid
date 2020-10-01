## Setup on local machine
```
yarn install
node index.js
```
This will launch the server on http://localhost:3000

## Endpoints

* /token : Generates a UUID/GUID and Token
* /token-redirect : Generates a UUID/GUID and Token, sets these values in the header and redirects to **/token-redirect-success**