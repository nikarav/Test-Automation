import {
  When,
  Then,
  BeforeAll,
  AfterAll,
  setDefaultTimeout,
} from "@cucumber/cucumber";
const chrome = require("selenium-webdriver/chrome");
import { Builder, By, until, WebDriver } from "selenium-webdriver";
import { assert } from "chai";
import { mobileDimensions } from "../helpers/conf";

const winston = require("winston");

let driverScenario3: WebDriver;

BeforeAll(async () => {
  setDefaultTimeout(10000);
  driverScenario3 = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
  winston.info("Running Scenario 3.");
});

AfterAll(async () => {
  winston.info("Scenario 3: All Scenario are finished. Exiting...");
  await driverScenario3.quit();
});

When("Scenario3: The user navigates to: {string}", async (url: string) => {
  winston.info(`Scenario 3: The user navigates to ${url}.`);
  await driverScenario3.get(url);
  /*
        We assume the user click "Accept All" in the
        cookie prompt.
    */
  const searchInput = await driverScenario3
    .findElement(By.className("coi-banner__accept"))
    .click();
});

When("The user is in the mobile viewport", async () => {
  winston.info(`Scenario 3: The user is in the mobile viewport`);

  // Change dimensions in order to emulate mobile session.
  await driverScenario3.manage().window().setRect(mobileDimensions);
});

Then(
  "{string} should NOT be visible on a mobile device",
  async (link: string) => {
    winston.info(
      `Scenario 3: ${link} should NOT be visible on a mobile device`
    );

    /*
        Explicit wait for the logo to load, which means the page will load.
    */
    await driverScenario3.wait(
      until.elementLocated(By.className("header__logo__link non-decorated"))
    );

    // With findElements I can check if the return list is empty.
    const searchInput = await driverScenario3.findElements(
      By.xpath(`//*[ text() = "${link}"]`)
    );

    // If the list is empty then the element is not visible.
    assert.isTrue(searchInput.length == 0);
  }
);
