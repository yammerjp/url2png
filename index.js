#!/usr/bin/env node

const puppeteer = require('puppeteer');
const crypto = require('crypto')

const url = process.argv[2]
const urlSha256 = crypto.createHash('sha256').update(url).digest('hex');

console.log(url)
console.log(urlSha256)
const main = async () => {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);
  await page.screenshot({ path: `img/${urlSha256}.png` });
  console.log(`saved`)
  console.log(`  url : ${url}`)
  console.log(`  file: img/${urlSha256}.png`)

  await browser.close();
};

main();
