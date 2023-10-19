const { test, expect } = require("@playwright/tests");
const user = require("./user.js");

test.beforeEach(async ({ page }) => {
  await page.goto("https://netology.ru/?modal=sign_in");
});

test("Successful authorization", async ({ page }) => {
  
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(email);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(password);
  await page.locator('[data-testid="login-submit-btn"]').click();
  await expect(page).toHaveURL("https://netology.ru/profile");
});

  
test("Failed authorization", async ({ page }) => {
  
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill(incorrectEmail);
  await page.locator('[placeholder="Пароль"]').click();
  await page.locator('[placeholder="Пароль"]').fill(incorrectPassword);
  await page.locator('[data-testid="login-submit-btn"]').click;
  await expect(page.locator("data-testid=login-error-hint")).toHaveText(
     "Вы ввели неправильно логин или пароль"
  );
});



/*test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  await page.goto("https://netology.ru/free/management#/");

  // Click a
  await page.click("a");
  await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
  await page.click("text=Учиться бесплатно");
  await expect(page).toHaveURL("https://netology.ru/free");

  page.click("text=Бизнес и управление");

  // Click text=Как перенести своё дело в онлайн
  await page.click("text=Как перенести своё дело в онлайн");
  await expect(page).toHaveURL(
    "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
  );
});
*/