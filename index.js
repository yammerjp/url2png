#!/usr/bin/env node

const puppeteer = require('puppeteer');
//const createHash = require("sha256-uint8array").createHash;
//const calcSha256 = (str) => { return createHash().update(str).digest("hex") };
const crypto = require('crypto')

const url = process.argv[2]
const urlSha256 = crypto.createHash('sha256').update(url).digest('hex');

console.log(url)
console.log(urlSha256)
const main = async () => {

  const browser = await puppeteer.launch();//Chromiumを起動
  const page = await browser.newPage();//新しいタブを開く
  await page.goto(url);//指定したURLに移動
  await page.screenshot({ path: `img/${urlSha256}.png` });//スクリーンショットを撮る
  console.log(`saved`)
  console.log(`  url : ${url}`)
  console.log(`  file: img/${urlSha256}.png`)

  await browser.close();//Chromiumを閉じる
};

main();
