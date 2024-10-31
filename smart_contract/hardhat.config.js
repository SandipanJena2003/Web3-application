require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: 'https://sepolia.infura.io/v3/661136c765da419ea9a639347316d142',
      accounts: ['773b38f3de3efc269316f034bb737e49d8970d192f0f3d8a0790cd17385d9a09'],
    },
  },
};