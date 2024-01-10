const Evote = artifacts.require("Evote");

module.exports = function (deployer) {
  deployer.deploy(Evote);
};
