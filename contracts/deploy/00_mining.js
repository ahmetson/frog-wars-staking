module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy} = deployments;
    const {deployer} = await getNamedAccounts();

    const pickaxeContractAddress = "0x7a9d9fd2d7777a23fd37c7e4D9cb9fB1158601Fd" // warriors
    const gemsContractAddress = "0x0984437ff738460fA65b72794ac4b8cC00395982";  // erc20

    await deploy('Mining', {
        from: deployer,
        args: [pickaxeContractAddress, gemsContractAddress],
        log: true,
    });
};
module.exports.tags = ['Mining'];