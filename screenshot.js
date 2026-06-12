const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1920, height: 1080 });
  await page.goto('file:///C:/Users/sasha/Desktop/SMM/prototype.html');
  
  // Scroll to the bottom to capture the new block
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(1000); // Wait for animations
  
  await page.screenshot({ path: 'trust-faq-block-20260524-210000.png', fullPage: false });
  await browser.close();
})();