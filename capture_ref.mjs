import puppeteer from 'puppeteer'; 

(async () => { 
  const browser = await puppeteer.launch(); 
  const page = await browser.newPage(); 
  await page.setViewport({width: 1280, height: 1024}); 
  await page.goto('https://cantra.wizi.work/features', {waitUntil: 'networkidle0'}); 
  await page.screenshot({path: 'cantra_features_ref.png', fullPage: true}); 
  await browser.close(); 
})();
