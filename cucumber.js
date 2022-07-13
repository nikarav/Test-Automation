let cucumberConfig= [
    "--require ./step-definitions/*.ts",
    "--format json:reports/result.json",
    "--format cucumber-console-formatter",
    "--require-module ts-node/register",
    "--publish-quiet"
].join(" ");

module.exports = {
    default: cucumberConfig
  };
  