```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.10.31/install)"
```
```bash
solana --version
```
## Solana/Web3.js
```bash
$ npm install --save @solana/web3.js
```
or
```bash
$ yarn add @solana/web3.js
```
## Wallet
```bash
mkdir ~/my-solana-wallet
solana-keygen new --outfile ~/my-solana-wallet/my-keypair.json
```
```bash
solana-keygen pubkey ~/my-solana-wallet/my-keypair.json
```
Output-
```bash
ErRr1caKzK8L8nn4xmEWtimYRiTCAZXjBtVphuZ5vMKy (something like this )
```

1. cd into the `app` folder
2. Run `npm install` at the root of your directory
3. Run `npm run start` to start the project

