"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateChainSpecificProxyAddress = exports.calculateProxyAddressWithCallback = exports.calculateProxyAddress = void 0;
const ethers_1 = require("ethers");
const calculateProxyAddress = async (factory, singleton, inititalizer, nonce) => {
    const factoryAddress = await factory.getAddress();
    const deploymentCode = ethers_1.ethers.solidityPacked(["bytes", "uint256"], [await factory.proxyCreationCode(), singleton]);
    const salt = ethers_1.ethers.solidityPackedKeccak256(["bytes32", "uint256"], [ethers_1.ethers.solidityPackedKeccak256(["bytes"], [inititalizer]), nonce]);
    return ethers_1.ethers.getCreate2Address(factoryAddress, salt, ethers_1.ethers.keccak256(deploymentCode));
};
exports.calculateProxyAddress = calculateProxyAddress;
const calculateProxyAddressWithCallback = async (factory, singleton, inititalizer, nonce, callback) => {
    const saltNonceWithCallback = ethers_1.ethers.solidityPackedKeccak256(["uint256", "address"], [nonce, callback]);
    return (0, exports.calculateProxyAddress)(factory, singleton, inititalizer, saltNonceWithCallback);
};
exports.calculateProxyAddressWithCallback = calculateProxyAddressWithCallback;
const calculateChainSpecificProxyAddress = async (factory, singleton, inititalizer, nonce, chainId) => {
    const factoryAddress = await factory.getAddress();
    const deploymentCode = ethers_1.ethers.solidityPacked(["bytes", "uint256"], [await factory.proxyCreationCode(), singleton]);
    const salt = ethers_1.ethers.solidityPackedKeccak256(["bytes32", "uint256", "uint256"], [ethers_1.ethers.solidityPackedKeccak256(["bytes"], [inititalizer]), nonce, chainId]);
    return ethers_1.ethers.getCreate2Address(factoryAddress, salt, ethers_1.ethers.keccak256(deploymentCode));
};
exports.calculateChainSpecificProxyAddress = calculateChainSpecificProxyAddress;
