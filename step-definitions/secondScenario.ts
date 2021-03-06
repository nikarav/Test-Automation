import {
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";
const chrome = require("selenium-webdriver/chrome");
import { Builder, By, Key, until, WebDriver } from "selenium-webdriver";
import { assert } from "chai";

const winston = require("winston");

let driverScenario2: WebDriver;

BeforeAll(async () => {
  setDefaultTimeout(10000);
  driverScenario2 = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
  winston.info("Running Scenario 2.");
});

AfterAll(async () => {
  winston.info("Scenario 2: All Scenario are finished. Exiting...");
  await driverScenario2.quit();
});

When("Scenario2: The user navigates to: {string}", async (url: string) => {
  winston.info(`Scenario 2: The user navigates to ${url}.`);
  await driverScenario2.get(url);
  /*
        We assume the user click "Accept All" in the
        cookie prompt.
    */
  const searchInput = await driverScenario2
    .findElement(By.className("coi-banner__accept"))
    .click();
});

When(
  "The user uses a search input field search for a keyword: {string}",
  async (keyword: string) => {
    winston.info(
      `Scenario 2: The user uses a search input field search for a keyword: ${keyword}.`
    );

    const searchInput = await driverScenario2.findElement(
      By.id("header-search-input")
    );

    await searchInput.sendKeys(keyword, Key.RETURN);
    await driverScenario2.wait(until.stalenessOf(searchInput));
  }
);

Then(
  "The page with results should contain: a link containing words: {string}",
  async (words: string) => {
    winston.info(
      `Scenario 2: The page with results should contain: a link containing words: ${words}`
    );

    /*
      Locally this works. However, just like in the first Scenario
      XPath is not working in the remote server.

        await driverScenario2.wait(
          until.elementLocated(By.xpath(`//a[div[contains(text(),"${words}")]]`))
        );

        const searchInput = await driverScenario2.findElement(
          By.xpath(`//a[div[contains(text(),"${words}")]]`)
        );
    */
    await driverScenario2.wait(
      until.elementLocated(
        By.className("conditionalLink__2WIeE tile__link clickable")
      )
    );

    let searchInput = await driverScenario2.findElements(
      By.className("conditionalLink__2WIeE tile__link clickable")
    );

    const promises = searchInput.map((input) => {
      return input.getText();
    });

    let val = await Promise.all(promises);

    let i = 0;
    let exists = false;
    for (i = 0; i < val.length; i++) {
      winston.info(`Scenario 2: ${i},  ${val[i].split("\n")[0]}`);
      // From the text we only need the first part of the split,
      // since the text is in the first <div>.
      const sentence = val[i].split("\n")[0];
      if (sentence.includes(words)) {
        exists = true;
        break;
      }
    }
    const val_href = await Promise.resolve(searchInput[i].getAttribute("href"));
    winston.info(`Scenario 2: Reference Link is ${val_href}`);
    assert.isTrue(val_href != "");
    assert.isTrue(exists);
    assert.isTrue(await searchInput[i].isDisplayed());
  }
);

Then(
  "The page with results should contain: at least one link pointing to a {string} file",
  async (type: string) => {
    winston.info(
      `Scenario 2: The page with results should contain: at least one link pointing to a ${type} file`
    );
    let searchInput = await driverScenario2.findElements(
      By.className("conditionalLink__2WIeE tile__link clickable")
    );

    const promises = searchInput.map((input) => {
      return input.getAttribute("href");
    });

    const val = await Promise.all(promises);

    let exists = false;
    for (let i = 0; i < val.length; i++) {
      if (val[i] != "" && val[i].split(".").at(-1) == type) {
        exists = true;
        break;
      }
    }

    winston.info(`Scenario 2: Type of ${type} exists? Answer: ${exists}`);
    assert.isTrue(exists);
  }
);
