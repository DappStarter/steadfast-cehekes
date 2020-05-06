require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn property grace drip food slogan'; 
let testAccounts = [
"0x4a2064d3f2b89eebda0328ccff8522bc90cbe6044269d1d1f1ed62260ce9913c",
"0x12237e6870d2b1be7312466927b15ce83695edda360646af2bd573352615b9ca",
"0x1c08da82c5ec7375734bfb5789492b245135f6f45e13e6b416ea7f66cf8568fb",
"0x38704f97342fd52a54456d885193219b46c5357faa90869e9556bad413445ed3",
"0x2e9955db4983870b1c7e79e7fd0b71ae26a2e14e031b4cbc6bff8b441b34fe3b",
"0x3e32110fb1e58716a618c81332816ff919a0771959bf2cb19542a797476409e5",
"0xd51c5633bdc38cca665fd146fc363c6717cfdc2c76f95232c6190249952ecea2",
"0x6ab75bda9db5a51b2cdad3829ddd00482d8913dec158fffcdb31fecb6f59c1fd",
"0xf5f62a498dab58f10364d5e5cd0db94e3c89a9f81d73e0fafffb190fd87fbe3d",
"0xd3b24992dd70c8aad1fd168319f46ae4c0f01ca262f5033be6ae51668c2a6093"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
