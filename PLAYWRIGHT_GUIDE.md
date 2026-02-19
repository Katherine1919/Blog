# Playwright Testing Guide for Blog

## Installation Complete

Playwright is installed and ready to use:
- Version: 1.58.2
- Installation: npm install -g @playwright/test @playwright/browser-chromium

## Usage

### Run All Tests
```bash
node test-blog.js
```

This will:
1. ✅ Visit your blog website
2. ✅ Take screenshots of homepage and articles
3. ✅ Test navigation
4. ✅ Test search functionality
5. ✅ Test article links
6. ✅ Verify SEO pages (sitemap.xml, robots.txt)

## Test Results

Screenshots will be saved to: `/home/admin/projects/opencode/blog-monetize-helper/screenshots/`

## What Playwright Will Do

1. **Homepage Testing**
   - Full page screenshot
   - Navigation testing
   - Article cards verification
   - Search function testing

2. **Article Testing**
   - Test first 3 articles (004, 005, 006)
   - Verify content loading
   - Test back navigation

3. **SEO Testing**
   - Verify sitemap.xml accessibility
   - Verify robots.txt accessibility
   - Check response codes

## Expected Output

```
📱 Testing Homepage...
✅ Navigated to: https://blog-monetize-helper.vercel.app
✅ Screenshot saved: 01-homepage-full.png
...
```

## Next Steps After Testing

1. Review screenshots to verify design
2. Check for any broken links
3. Verify all content is displaying correctly
4. Confirm product recommendations are visible
5. Test affiliate links (click and verify)

## Running Tests Now...
```bash
cd /home/admin/projects/opencode/blog-monetize-helper
node test-blog.js
```
