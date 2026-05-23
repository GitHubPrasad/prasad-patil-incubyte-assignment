module.exports = {
  default: {
    features: ["tests/features/**/*.feature"],
    require: ["tests/step_definitions/**/*.ts"],
    requireModule: ["ts-node/register"],
    timeout: 120000, // 120 seconds timeout for each step
    format: ["progress-bar", "html:cucumber-report.html"],
    formatOptions: {
      snippetInterface: "async-await",
    },
  },
};
