import { chromium as playwright } from 'playwright-core';
import chromium from '@sparticuz/chromium';
import fs from 'node:fs/promises';
const base='https://sina-venture-gateway.vercel.app';
await fs.mkdir('public/qa',{recursive:true});
const browser=await playwright.launch({executablePath:await chromium.executablePath(),args:chromium.args,headless:true});
try{
for(const [name,w,h] of [['desktop',1440,900],['mobile',390,844]]){
const page=await browser.newPage({viewport:{width:w,height:h},deviceScaleFactor:1});
const res=await page.goto(base+'/',{waitUntil:'networkidle',timeout:30000});
if(res.status()!==200)throw Error('Unexpected page status '+res.status());
const actual=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,title:document.title,proof:!!document.querySelector('.proof-feature')}));
if(actual.scroll>actual.width||!actual.proof)throw Error('Layout or content failure '+JSON.stringify(actual));
await page.screenshot({path:'public/qa/'+name+'.png',fullPage:true,animations:'disabled'});
await page.locator('[data-category="enterprise"]').click();
if(await page.locator('#category').inputValue()!=='enterprise')throw Error('Audience routing failed');
console.log('GATEWAY_BROWSER_QA PASS '+name+' '+JSON.stringify(actual));
await page.close();
}
}finally{await browser.close()}
