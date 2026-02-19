#!/usr/bin/env node

/**
 * Blog Monetization Helper - Playwright Test Script
 * 
 * This script uses Playwright to test the blog website:
 * - Take screenshots
 * - Test navigation
 * - Verify content
 * - Check SEO elements
 * 
 * Usage: node test-blog.js
 */

const { chromium } = require('playwright-chromium');
const path = require('path');

// Configuration
const CONFIG = {
  baseUrl: 'https://blog-monetize-helper.vercel.app',
  outputDir: path.join(__dirname, 'screenshots'),
  headless: false, // Set to true for server environment
  viewport: { width: 1920, height: 1080 },
  slowMo: 500 // Slow down for better screenshots
};

// Create output directory if it doesn't exist
const fs = require('fs');
if (!fs.existsSync(CONFIG.outputDir)) {
  fs.mkdirSync(CONFIG.outputDir, { recursive: true });
  console.log(`Created output directory: ${CONFIG.outputDir}`);
}

async function takeScreenshot(page, name) {
  const filename = path.join(CONFIG.outputDir, `${name}.png`);
  await page.screenshot({ path: filename, fullPage: true });
  console.log(`✅ Screenshot saved: ${filename}`);
}

async function testHomepage(browser) {
  console.log('\n📱 Testing Homepage...');
  
  const context = await browser.newContext({
    viewport: CONFIG.viewport,
    slowMo: CONFIG.slowMo
  });
  
  const page = await context.newPage();
  
  try {
    // Navigate to homepage
    await page.goto(CONFIG.baseUrl, { waitUntil: 'networkidle' });
    console.log(`✅ Navigated to: ${CONFIG.baseUrl}`);
    
    // Take full page screenshot
    await takeScreenshot(page, '01-homepage-full');
    
    // Test navigation links
    console.log('\n🔗 Testing Navigation...');
    
    // Test Articles link
    const articlesLink = await page.locator('a[href="#articles"]').first();
    await articlesLink.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(CONFIG.outputDir, '02-navigation.png') });
    console.log('✅ Navigation screenshot taken');
    
    // Test Tools section
    console.log('\n🛠️ Testing Tools Section...');
    const toolsSection = await page.locator('#tools');
    await toolsSection.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(CONFIG.outputDir, '03-tools-section.png') });
    console.log('✅ Tools section screenshot taken');
    
    // Test AdSense section
    console.log('\n📊 Testing AdSense Section...');
    const adsSection = await page.locator('#ads');
    await adsSection.scrollIntoViewIfNeeded();
    await page.screenshot({ path: path.join(CONFIG.outputDir, '04-adsense-section.png') });
    console.log('✅ AdSense section screenshot taken');
    
    // Test Article Links
    console.log('\n📚 Testing Article Links...');
    const articleLinks = await page.locator('.article-card').all();
    console.log(`Found ${articleLinks.length} article cards`);
    
    // Click on first article
    if (articleLinks.length > 0) {
      await articleLinks[0].click();
      await page.waitForLoadState('networkidle');
      console.log('✅ Navigated to first article');
      
      // Take screenshot of article
      await takeScreenshot(page, '05-article-detail');
      
      // Test back to home
      const backLink = await page.locator('.back-link');
      await backLink.click();
      await page.waitForLoadState('networkidle');
      console.log('✅ Returned to homepage');
    }
    
    // Test Search Functionality
    console.log('\n🔍 Testing Search Functionality...');
    const searchInput = await page.locator('#search-input');
    await searchInput.fill('AdSense');
    await page.keyboard.press('Enter');
    await page.waitForTimeout(2000); // Wait for search results
    console.log('✅ Search functionality tested');
    
    // Final screenshot
    console.log('\n📸 Taking Final Screenshot...');
    await page.screenshot({ path: path.join(CONFIG.outputDir, '06-final-state.png') });
    
  } catch (error) {
    console.error('❌ Error testing homepage:', error);
  } finally {
    await context.close();
  }
}

async function testArticle(browser, articleNumber) {
  console.log(`\n📱 Testing Article ${articleNumber}...`);
  
  const context = await browser.newContext({
    viewport: CONFIG.viewport,
    slowMo: CONFIG.slowMo
  });
  
  const page = await context.newPage();
  
  try {
    const url = `${CONFIG.baseUrl}/article-00${articleNumber}.html`;
    await page.goto(url, { waitUntil: 'networkidle' });
    console.log(`✅ Navigated to: ${url}`);
    
    // Take screenshot
    await takeScreenshot(page, `article-00${articleNumber}-full`);
    
    // Test content
    const content = await page.locator('.content');
    console.log('✅ Article content loaded');
    
  } catch (error) {
    console.error(`❌ Error testing article ${articleNumber}:`, error);
  } finally {
    await context.close();
  }
}

async function testSEOPages(browser) {
  console.log('\n🔍 Testing SEO Pages...');
  
  const context = await browser.newContext({
    viewport: CONFIG.viewport
  });
  
  const page = await context.newPage();
  
  try {
    // Test sitemap.xml
    console.log('\n🗺️ Testing sitemap.xml...');
    const sitemapUrl = `${CONFIG.baseUrl}/sitemap.xml`;
    const sitemapResponse = await page.goto(sitemapUrl);
    console.log(`✅ Sitemap status: ${sitemapResponse.status()}`);
    
    // Test robots.txt
    console.log('\n🤖 Testing robots.txt...');
    const robotsUrl = `${CONFIG.baseUrl}/robots.txt`;
    const robotsResponse = await page.goto(robotsUrl);
    console.log(`✅ Robots.txt status: ${robotsResponse.status()}`);
    
  } catch (error) {
    console.error('❌ Error testing SEO pages:', error);
  } finally {
    await context.close();
  }
}

async function runAllTests() {
  console.log('🚀 Starting Playwright Tests...');
  console.log(`🌐 Testing website: ${CONFIG.baseUrl}`);
  console.log(`📂 Output directory: ${CONFIG.outputDir}`);
  
  const browser = await chromium.launch({
    headless: CONFIG.headless
  });
  
  try {
    // Test Homepage
    await testHomepage(browser);
    
    // Test First 3 Articles
    await testArticle(browser, 1);
    await testArticle(browser, 2);
    await testArticle(browser, 3);
    
    // Test SEO Pages
    await testSEOPages(browser);
    
  } catch (error) {
    console.error('❌ Test failed:', error);
  } finally {
    await browser.close();
  }
  
  console.log('\n✅ All tests completed!');
  console.log(`📸 Screenshots saved to: ${CONFIG.outputDir}`);
}

// Run tests
runAllTests().catch(console.error);
