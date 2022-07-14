let cucumberConfig= [
    "--require ./step-definitions/*.ts",
    "--format json:reports/result.json",
    "--require-module ts-node/register",
    "--publish-quiet"
].join(" ");

module.exports = {
    default: cucumberConfig
  };
  