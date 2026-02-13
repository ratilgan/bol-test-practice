import { test, expect } from "@playwright/test";

test.only("test", async ({ page }) => {
  await page.goto("https://www.coolblue.be/nl");
  await page.getByRole("button", { name: "Accepteer alle cookies" }).click();
  await page.getByRole("searchbox", { name: "Zoeken naar producten" }).click();
  await page
    .getByRole("searchbox", { name: "Zoeken naar producten" })
    .fill("printer");
  await page.getByRole("button", { name: "Zoeken" }).click();
  await page.getByRole("heading", { name: "Thuis" }).click();
  await page.getByRole("link", { name: "Bekijk alle printers voor" }).click();
  await page
    .getByRole("link", { name: "Epson EcoTank ET-2871", exact: true })
    .click();
  await expect(page.locator("h1")).toContainText("Epson EcoTank ET-2871");
  await page
    .getByRole("button", { name: "In mijn winkelwagen" })
    .first()
    .click();
  await page.getByRole("link", { name: "Bekijk mijn winkelwagen" }).click();
  await page.getByRole("button", { name: "Ik ga bestellen" }).click();
  await page.getByRole("textbox", { name: "Je e-mailadres" }).click();
  await page
    .getByRole("textbox", { name: "Je e-mailadres" })
    .fill("ratilgan@gmail.com");
  await page.getByRole("button", { name: "Doorgaan" }).click();
  await page
    .getByRole("textbox", { name: "Je wachtwoord", exact: true })
    .click();
  await page
    .getByRole("textbox", { name: "Je wachtwoord", exact: true })
    .fill("32520012");
  await page
    .getByRole("textbox", { name: "Je wachtwoord", exact: true })
    .press("Tab");
  await page.getByRole("textbox", { name: "Herhaal je wachtwoord" }).click();
  await page
    .getByRole("textbox", { name: "Herhaal je wachtwoord" })
    .fill("321520123");
  await page.getByRole("button", { name: "Account aanmaken" }).click();
  await expect(page.getByText("Je ingevulde wachtwoorden")).toBeVisible();
  await expect(page.getByRole("paragraph")).toContainText(
    "Je ingevulde wachtwoorden zijn niet hetzelfde. Probeer het opnieuw.",
  );
});
