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

const winston = require("winston");

let driver: WebDriver;

BeforeAll(async () => {
  setDefaultTimeout(10000);
  driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(new chrome.Options().headless())
    .build();
  winston.info("Running Scenario 1.");
});

AfterAll(async () => {
  winston.info("Scenario 1: All Scenario are finished. Exiting...");
  await driver.quit();
});

When("The user navigates to: {string}", async (url: string) => {
  winston.info(`Scenario 1: The user navigates to ${url}.`);
  await driver.get(url);

  const searchInput = await driver
    .findElement(By.className("coi-banner__accept"))
    .click();
});

Then("A link containing text: {string} is visible", async (text: string) => {
  winston.info(
    `Scenario 1: A link containing text: ${text} should be visible.`
  );

  await driver.wait(
    until.elementLocated(By.className("header__logo__link non-decorated"))
  );
  const searchInput = await driver.findElement(
    By.xpath(`//a[span[span[contains(text(),"${text}")]]]`)
  );

  const searchInput1 = await driver.findElement(
    By.xpath(`//span[contains(text(),"${text}")]`)
  );

  //await driver.wait(until.elementIsVisible(searchInput), 55000);
  const val = await Promise.resolve(searchInput.getAttribute("href"));
  winston.info(`Scenario 1: Reference Link is ${val}`);
  assert.isTrue(val != "");
  assert.isTrue(await searchInput.isDisplayed());
});
