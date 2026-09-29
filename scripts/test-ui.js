const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

const screenshotsDir = path.join(__dirname, "../public/test-screenshots");
if (!fs.existsSync(screenshotsDir)) {
  fs.mkdirSync(screenshotsDir, { recursive: true });
}

const viewports = [
  { name: "Mobile-320", width: 320, height: 640 },
  { name: "Mobile-375", width: 375, height: 812 },
  { name: "Mobile-390", width: 390, height: 844 },
  { name: "Tablet-768", width: 768, height: 1024 },
  { name: "Desktop-1280", width: 1280, height: 800 },
];

const routes = [
  "/",
  "/over-ons",
  "/contact",
  "/diensten",
  "/diensten/gevelreiniging",
  "/diensten/zandstralen-nevelstralen",
  "/diensten/voegwerk",
  "/diensten/graffiti-verwijderen",
  "/diensten/gevel-impregneren",
  "/diensten/stoomreiniging",
  "/diensten/algen-mos-verwijderen",
  "/privacy"
];

async function run() {
  const browser = await chromium.launch();
  let totalIssues = 0;

  for (const vp of viewports) {
    console.log(`\n=== Testing Viewport: ${vp.name} (${vp.width}x${vp.height}) ===`);
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });

    for (const route of routes) {
      const url = `http://localhost:3002${route}`;
      await page.goto(url, { waitUntil: "networkidle" });

      // Check document overflow
      const overflow = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const overflowingElements = [];

        if (docWidth > winWidth) {
          const all = document.querySelectorAll("*");
          for (const el of all) {
            const rect = el.getBoundingClientRect();
            if (rect.right > winWidth + 1) {
              overflowingElements.push({
                tag: el.tagName,
                class: el.className ? String(el.className).slice(0, 80) : "",
                text: el.innerText ? el.innerText.slice(0, 40) : "",
                right: rect.right,
                winWidth
              });
            }
          }
        }

        return {
          hasOverflow: docWidth > winWidth,
          docWidth,
          winWidth,
          diff: docWidth - winWidth,
          overflowingElements: overflowingElements.slice(0, 5)
        };
      });

      if (overflow.hasOverflow) {
        console.error(`❌ [${vp.name}] OVERFLOW on ${route}: docWidth=${overflow.docWidth}, winWidth=${overflow.winWidth} (+${overflow.diff}px)`);
        totalIssues++;
      } else {
        console.log(`✓ [${vp.name}] ${route} OK`);
      }

      // Special check on ContactCTA on mobile
      if (route === "/over-ons" && vp.name === "Mobile-375") {
        const ctaCheck = await page.evaluate(() => {
          const emailEl = document.querySelector('a[href^="mailto:"]');
          if (!emailEl) return { found: false };
          const rect = emailEl.getBoundingClientRect();
          return {
            found: true,
            text: emailEl.innerText,
            right: rect.right,
            winWidth: window.innerWidth,
            isWithinBounds: rect.right <= window.innerWidth
          };
        });

        console.log("ContactCTA email check on Mobile-375:", ctaCheck);
        if (ctaCheck.found && !ctaCheck.isWithinBounds) {
          console.error("❌ ContactCTA email exceeds viewport width!");
          totalIssues++;
        }
      }
    }

    // Test mobile menu interaction on mobile viewports
    if (vp.width <= 414) {
      console.log(`Testing Mobile Menu on ${vp.name}...`);
      await page.goto("http://localhost:3002/", { waitUntil: "networkidle" });
      const menuBtn = page.locator('button[aria-label="Menu openen"]');
      await menuBtn.click();
      await page.waitForTimeout(300);

      const drawer = page.locator("#mobile-menu-drawer");
      const isVisible = await drawer.isVisible();
      if (!isVisible) {
        console.error(`❌ Mobile menu did not open on ${vp.name}`);
        totalIssues++;
      } else {
        console.log(`✓ Mobile menu opened successfully on ${vp.name}`);
        const closeBtn = page.locator('button[aria-label="Menu sluiten"]');
        await closeBtn.click();
        await page.waitForTimeout(300);
        console.log(`✓ Mobile menu closed successfully on ${vp.name}`);
      }
    }

    await page.close();
  }

  // Visual snapshot check on Mobile-375
  const snapPage = await browser.newPage({ viewport: { width: 375, height: 812 } });
  await snapPage.goto("http://localhost:3002/over-ons", { waitUntil: "networkidle" });
  await snapPage.screenshot({ path: path.join(screenshotsDir, "over-ons-mobile-375.png"), fullPage: true });
  console.log("✓ Saved visual snapshot for /over-ons on Mobile-375");

  await snapPage.goto("http://localhost:3002/", { waitUntil: "networkidle" });
  await snapPage.screenshot({ path: path.join(screenshotsDir, "homepage-mobile-375.png"), fullPage: true });
  console.log("✓ Saved visual snapshot for / on Mobile-375");

  await snapPage.close();
  await browser.close();

  console.log(`\n================================`);
  console.log(`Test suite finished. Total issues: ${totalIssues}`);
  console.log(`================================`);
  if (totalIssues > 0) {
    process.exit(1);
  }
}

run().catch((err) => {
  console.error("Test error:", err);
  process.exit(1);
});
