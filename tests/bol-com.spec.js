import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://www.bol.com/be/nl/");
  await page.getByRole("button", { name: "Alles accepteren" }).click();
  await page.getByRole("button", { name: "Doorgaan" }).click();
  await page.locator('[data-test="search_input_trigger"]').click();
  await page.locator('[data-test="search_input_trigger"]').fill("printer");
  await page.locator('[data-test="search-button"]').click();
  await page
    .getByRole("link", { name: "Epson EcoTank ET-2876 - All-" })
    .click();
  await expect(page.locator("h1")).toContainText("Epson EcoTank ET-2876");
  await expect(page.locator("#buyBlockSlot")).toContainText("189");
  await page.getByText("In winkelwagen").click();
  await page.getByRole("link", { name: "Naar de kassa" }).first().click();
  await page.getByRole("textbox", { name: "E-mailadres" }).click();
  await page
    .getByRole("textbox", { name: "E-mailadres" })
    .fill("ratilgan@gmail.com");
  await page.getByRole("textbox", { name: "E-mailadres" }).press("Tab");
  await page.getByRole("textbox", { name: "Wachtwoord" }).fill("3253232");
  await page.getByRole("button", { name: "Inloggen" }).click();
  await expect(
    page.getByRole("alert").filter({ hasText: "We kunnen je gegevens op dit" }),
  ).toBeVisible();
});
