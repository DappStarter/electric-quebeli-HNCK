require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flee trophy charge ranch remind concert grace basket force sport'; 
let testAccounts = [
"0x215363a8a01adc41489220d83bd0c94220669531957e37a1d76a2ad422da4ac3",
"0x638ad0cdee2080305acdf09198a8afbe1a137068548a9cd7045273b9ab4b4149",
"0x6b1d7d72865b8bc07718f61c8d04cd4751515d7487376af8dfaa19c518f53303",
"0x84200ad1087693dc892de69ffc9b660a0ba004a3a07524150924a1791a2aae3f",
"0x5c90478d2e05c0aa01950d4b4d28d297c83d20ccfa9a88a44df7243cdca33dcc",
"0xdb5929c92630292213388d01fcf8ef98eb67bf4e58c9d7c3e21cba3dff903425",
"0xfa2c4342c8c07be6ca66ad4db0863be765a76accc33d8d13cee9bacbf7f4eeef",
"0xa651fc1a62bfd486ba5a06786ba8bdb2f08b1ff8d85890c0b32f707f9bb5446d",
"0x8ceb1e036e188b1b27fcda4537e872573b8ba5e9a5cd4ead422d249b82a26074",
"0x94d98a1ce4d4fe98ab9755711f2988af3bd03996bd47295ee74e0bd10894ccae"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

