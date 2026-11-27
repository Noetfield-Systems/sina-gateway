import {chromium} from 'playwright-core';
import fs from 'node:fs/promises';
const base='https://sina-venture-gateway.vercel.app';
await fs.mkdir('qa-captures',{recursive:true});
const browser=await chromium.launch({executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',args:['--no-sandbox'],headless:true});
const results=[];
try{
 for(const [device,width,height] of [['desktop',1440,900],['tablet',820,1180],['mobile',390,844]]){
  for(const mode of ['light','dark']){
   const context=await browser.newContext({viewport:{width,height},colorScheme:mode,deviceScaleFactor:1});
   const page=await context.newPage();
   const response=await page.goto(base+'/',{waitUntil:'networkidle',timeout:30000});
   if(response.status()!==200)throw Error('Home HTTP '+response.status());
   await page.locator('.premium-hero-proof img').first().waitFor({state:'visible'});
   await page.locator('.premium-hero-proof img').last().scrollIntoViewIfNeeded();
   await page.waitForFunction(()=>[...document.querySelectorAll('.premium-hero-proof img')].every(i=>i.complete&&i.naturalWidth>0));
   await page.evaluate(()=>scrollTo(0,0));
   const home=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,theme:document.documentElement.dataset.theme,captures:document.querySelectorAll('.premium-hero-proof img').length}));
   if(home.scroll>home.width||home.theme!==mode||home.captures!==2)throw Error('Home layout '+JSON.stringify(home));
   await page.screenshot({path:'qa-captures/'+device+'-'+mode+'-home.png',fullPage:false,animations:'disabled'});
   const work=await page.goto(base+'/work/',{waitUntil:'networkidle',timeout:30000});
   if(work.status()!==200)throw Error('Work HTTP '+work.status());
   const state=await page.evaluate(()=>({width:innerWidth,scroll:document.documentElement.scrollWidth,theme:document.documentElement.dataset.theme,count:document.querySelectorAll('[data-work]').length}));
   if(state.scroll>state.width||state.theme!==mode||state.count!==4)throw Error('Library layout '+JSON.stringify(state));
   await page.screenshot({path:'qa-captures/'+device+'-'+mode+'-library.png',fullPage:false,animations:'disabled'});
   await page.locator('#work-search').fill('TriFlow');
   if(await page.locator('[data-work]:visible').count()!==1)throw Error('Search failed');
   await page.locator('#work-search').fill('no-matching-fixture-846');
   if(!await page.locator('#work-empty').isVisible())throw Error('Empty-state failed');
   await page.locator('#work-search').fill('');
   await page.getByRole('button',{name:'Theme',exact:true}).click();
   await page.locator('[data-mode="'+(mode==='light'?'dark':'light')+'"]').click();
   if(await page.locator('html').getAttribute('data-theme')==mode)throw Error('Theme toggle failed');
   results.push({device,mode,home,state,search:'PASS',themeToggle:'PASS'});
   console.log('GATEWAY_BROWSER_QA PASS '+JSON.stringify(results.at(-1)));
   await context.close();
  }
 }
}finally{await fs.writeFile('qa-captures/results.json',JSON.stringify(results,null,2));await browser.close();}
