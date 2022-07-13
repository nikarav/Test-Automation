const report = require("multiple-cucumber-html-reporter");

report.generate({
    jsonDir: "./reports/",
    reportPath: "./reports/",
    displayDuration: true,
    openReportInBrowser: true,
    reportName: "QAMIND TESTS",
});
