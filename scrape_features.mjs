import puppeteer from 'puppeteer';
import fs from 'fs';

const urls = [
  'https://cantra-care-features.wizi-technol-4609.chatgpt.site/care-plan/',
  'https://cantra-care-features.wizi-technol-4609.chatgpt.site/emar/',
  'https://cantra-care-features.wizi-technol-4609.chatgpt.site/staff-rota/',
  'https://cantra-care-features.wizi-technol-4609.chatgpt.site/compliances/'
];

const artifactsDir = 'C:/Users/Admin/.gemini/antigravity/brain/447047c9-7d2a-4409-9e94-9d4836add9c6/scratch';
if (!fs.existsSync(artifactsDir)) {
    fs.mkdirSync(artifactsDir, { recursive: true });
}

async function scrape() {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (let i = 0; i < urls.length; i++) {
    const url = urls[i];
    console.log(`Navigating to ${url}...`);
    await page.goto(url, { waitUntil: 'networkidle0' });
    
    // Take full page screenshot
    const name = url.split('/').filter(Boolean).pop();
    const screenshotPath = `${artifactsDir}/${name}.png`;
    await page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`Saved screenshot to ${screenshotPath}`);

    // Extract text content for reference
    const textContent = await page.evaluate(() => {
       return document.body.innerText;
    });
    fs.writeFileSync(`${artifactsDir}/${name}.txt`, textContent);
    console.log(`Saved text to ${artifactsDir}/${name}.txt`);
  }

  await browser.close();
}

scrape().catch(console.error);
