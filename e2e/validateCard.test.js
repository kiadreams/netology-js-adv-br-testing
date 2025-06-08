import puppeteer, { TimeoutError } from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000); // default puppeteer timeout

describe('Credit Card Validator form', () => {
  let browser = null;
  let page = null;
  let server = null;
  const baseUrl = 'http://localhost:9000';

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);
    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
      headless: 'shell', // show gui
      slowMo: 100,
      devtools: true, // show devTools
    });
  });

  beforeEach(async () => {
    if (page !== null) {
      page.close();
    }
    page = await browser.newPage();
    await page.goto(baseUrl);
    await page.waitForSelector('#form');
  });

  afterAll(async () => {
    await browser.close();
    server.kill();
  });

  test('Validate correct credit card', async () => {
    page.on('dialog', async (dialog) => {
      await dialog.accept();
      if (dialog.message() !== 'Номер карты корректный!') {
        throw new TimeoutError("Correct card's test is failing");
      }
    });
    const inputField = await page.$('#card_number');
    const submitButton = await page.$('#submit-button');
    await inputField.type('4539325346346672');
    await submitButton.click();
  });

  test('Validate incorrect credit card', async () => {
    page.on('dialog', async (dialog) => {
      await dialog.accept();
      if (dialog.message() !== 'Указан некоректный номер карты!') {
        throw new TimeoutError("Incorrect card's test is failing");
      }
    });
    const inputField = await page.$('#card_number');
    const submitButton = await page.$('#submit-button');
    await inputField.type('4539470555362266841');
    await submitButton.click();
  });
});
