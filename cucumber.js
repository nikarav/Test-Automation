let cucumberConfig= [
    "--require ./step-definitions/*.ts",
    "--require-module ts-node/register",
    "--publish-quiet"
].join(" ");

module.exports = {
    default: cucumberConfig
  };
  