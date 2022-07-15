# Test-Automation
[![Testing](https://github.com/nikarav/Test-Automation/actions/workflows/node.js.yml/badge.svg)](https://github.com/nikarav/Test-Automation/actions/workflows/node.js.yml)



## Purpose

The purpose of this repository is to create automated tests using Cucumber and Typescript. The features make use of selenium webdriver to launch tests for frontend.

The automated tests are created for the website  https://www.danfoss.com/en/.

> **_NOTE:_** The CI/CD is not functional. All of the tests successfully executed and passed locally.

## Requirements
- nodeJs version 18.x.
- Google Chrome installed locally.
- Chrome driver for selenium. See [here](https://chromedriver.chromium.org/downloads).


## Running Project

```
1. npm ci
2. npm run tests
```

## Scenarios

### Scenario 1 - visible button with a text

- WHEN the user navigates to: https://www.danfoss.com/en/
- THEN a link containing text: "Explore Danfoss Product Store" is visible

### Scenario 2 - Alsense search results are available

- WHEN the user navigates to https://www.danfoss.com/en/
  - AND the user uses a search input field search for a keyword: "Alsense"
- THEN the page with results should contain:
- a link containing words: "Alsense IoT cloud monitoring"
  - AND at least one link pointing to a `pdf` file
  

### Scenario 3 - Quick Links not visible in mobile view

- WHEN the user navigates to https://www.danfoss.com/en/
  - AND the user is in the mobile viewport (window resolution recognised as mobile device)
- THEN "Quick Links" should NOT be visible on a mobile device
