const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await page.goto("http://localhost:3002/", { waitUntil: "domcontentloaded" });
  await page.waitForTimeout(1000);

  const buttons = await page.evaluate(() => {
    return Array.from(document.querySelectorAll("button")).map((b) => ({
      text: b.innerText,
      ariaLabel: b.getAttribute("aria-label"),
      classes: b.className
    }));
  });

  console.log("Buttons found:", buttons);
  await browser.close();
})();
