// init a browser, page and tell them where to go
import puppeteer from 'puppeteer'
;(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: null,
  })
  const page = await browser.newPage()
  await page.goto('https://google.ca')

  // take a screen
  await page.screenshot({ path: './screens/testShit.jpg', fullPage: true })
  await page.screenshot({
    path: './screens/testShitCrop.jpg',
    clip: { x: 200, y: 200, width: 500, height: 500 },
  })
  await page.screenshot({
    path: './screens/testShitCrop2.jpg',
    clip: { x: 400, y: 200, width: 500, height: 500 },
  })

  await browser.close()
})()
