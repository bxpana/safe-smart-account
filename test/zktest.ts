import hre from "hardhat";

export const getWallet = async (privateKey?: string) => {
    const wallet = await hre.zksyncEthers.getWallet(privateKey ?? process.env.WALLET_PRIVATE_KEY);
    return wallet;
};

describe("Transaction", function () {
    it.only("Should send a transaction", async function () {
        // Obtain the wallet with the private key
        const wallet = await getWallet("0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110");

        // Impersonate the account corresponding to the wallet
        await hre.network.provider.send("hardhat_impersonateAccount", [
            "0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110",
        ]);

        // Populate the transaction object
        const tx = await wallet.populateTransaction({
            to: `0x${"0".repeat(39)}1`, // Ensure this is a valid address
            data: "0x",
            value: 1,
        });

        // Modify the transaction object's properties to be hex strings
        tx.value = "0x" + (tx.value?.toString(16) || "");
        tx.gasLimit = "0x" + (tx.gasLimit?.toString(16) || "");
        tx.gasPrice = "0x" + (tx.gasPrice?.toString(16) || "");
        tx.nonce = "0x" + (tx.nonce?.toString(16) || "");
        tx.chainId = "0x" + (tx.chainId?.toString(16) || "");
        tx.type = "0x0";

        // Send the transaction
        const receipt = await hre.network.provider.send("eth_sendTransaction", [tx]);
        console.log({ receipt });
    });
});
