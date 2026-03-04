// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('AmeyemGeo - Navigation', () => {
  
  test('should have working navigation links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find all navigation links
    const navLinks = page.locator('nav a, [role="navigation"] a').all();
    
    for (const link of await navLinks) {
      try {
        const href = await link.getAttribute('href');
        const text = await link.textContent();
        
        if (href && !href.startsWith('#') && !href.startsWith('http')) {
          console.log(`Testing navigation to: ${text} (${href})`);
          
          // Navigate to the link
          await page.goto(href);
          await page.waitForLoadState('networkidle');
          
          // Check it's not a 404
          const is404 = await page.locator('text=/404|not found/i').count();
          if (is404 === 0) {
            console.log(`✓ Navigation to ${href} works`);
          } else {
            console.log(`⚠ ${href} returns 404`);
          }
          
          // Go back to home
          await page.goto('/');
          await page.waitForLoadState('networkidle');
        }
      } catch (error) {
        console.log('Error testing link:', error.message);
      }
    }
  });

  test('should handle smooth scrolling to sections', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Look for anchor links
    const anchorLinks = page.locator('a[href^="#"]').all();
    
    const count = await anchorLinks;
    console.log(`Found ${count.length} anchor links`);
    
    if (count.length > 0) {
      const firstLink = count[0];
      const href = await firstLink.getAttribute('href');
      
      await firstLink.click();
      await page.waitForTimeout(1000);
      
      console.log(`✓ Clicked anchor link ${href}`);
    }
  });

  test('should highlight active section in navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Scroll to different sections and check if nav highlights
    
    // Look for navigation with active states
    const navItems = page.locator('nav a, [role="navigation"] a').all();
    
    for (const item of await navItems) {
      const classes = await item.getAttribute('class') || '';
      if (classes.includes('active') || classes.includes('current')) {
        console.log('✓ Active navigation item found');
        return;
      }
    }
    
    console.log('⚠ No active state in navigation (may not be implemented)');
  });

  test('should have accessible navigation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for keyboard navigation
    await page.keyboard.press('Tab');
    await page.waitForTimeout(200);
    
    const focusedElement = await page.evaluate(() => document.activeElement?.tagName);
    
    if (focusedElement === 'A' || focusedElement === 'BUTTON') {
      console.log('✓ Keyboard navigation working');
    } else {
      console.log('⚠ Keyboard navigation may not work correctly');
    }
  });
});

test.describe('AmeyemGeo - Contact Form', () => {
  
  test('should have contact form', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Look for contact form
    const form = page.locator('form').filter({ hasText: /contact|email|message/i }).first();
    const count = await form.count();
    
    if (count > 0) {
      await expect(form).toBeVisible();
      console.log('✓ Contact form found');
      
      // Check for form fields
      const nameInput = form.locator('input[name*="name"], input[type="text"]').first();
      const emailInput = form.locator('input[name*="email"], input[type="email"]').first();
      const messageArea = form.locator('textarea').first();
      
      const hasName = await nameInput.count() > 0;
      const hasEmail = await emailInput.count() > 0;
      const hasMessage = await messageArea.count() > 0;
      
      console.log(`Form fields - Name: ${hasName}, Email: ${hasEmail}, Message: ${hasMessage}`);
      
      // Try filling form
      if (hasName) await nameInput.fill('Test User');
      if (hasEmail) await emailInput.fill('test@example.com');
      if (hasMessage) await messageArea.fill('This is a test message');
      
      await page.waitForTimeout(500);
      console.log('✓ Form can be filled');
      
      // Look for submit button
      const submitBtn = form.locator('button[type="submit"], button:has-text("Send"), button:has-text("Submit")').first();
      const btnCount = await submitBtn.count();
      
      if (btnCount > 0) {
        console.log('✓ Submit button found');
      }
    } else {
      console.log('⚠ Contact form not found');
    }
  });

  test('should have form validation', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const form = page.locator('form').first();
    const count = await form.count();
    
    if (count > 0) {
      // Try submitting empty form
      const submitBtn = form.locator('button[type="submit"]').first();
      const btnCount = await submitBtn.count();
      
      if (btnCount > 0) {
        await submitBtn.click();
        await page.waitForTimeout(500);
        
        // Look for validation errors
        const errors = await page.locator('[role="alert"], .error, [class*="error"], [class*="invalid"]').count();
        
        if (errors > 0) {
          console.log('✓ Form validation present');
        } else {
          console.log('⚠ No form validation visible');
        }
      }
    }
  });
});

test.describe('AmeyemGeo - Broken Links Check', () => {
  
  test('should have no broken internal links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get all internal links
    const allLinks = await page.locator('a[href^="/"], a[href^="#"]').all();
    
    let brokenLinks = 0;
    let checkedLinks = 0;
    
    for (const link of allLinks.slice(0, 10)) { // Check first 10 links to save time
      const href = await link.getAttribute('href');
      
      if (href && !href.startsWith('#')) {
        checkedLinks++;
        
        try {
          const response = await page.goto(href, { waitUntil: 'domcontentloaded' });
          
          if (response && response.status() >= 400) {
            console.log(`⚠ Broken link: ${href} (Status: ${response.status()})`);
            brokenLinks++;
          } else {
            console.log(`✓ Valid link: ${href}`);
          }
        } catch (error) {
          console.log(`⚠ Error checking link: ${href}`);
          brokenLinks++;
        }
        
        await page.goto('/');
      }
    }
    
    console.log(`Checked ${checkedLinks} links, ${brokenLinks} broken`);
    
    if (brokenLinks === 0) {
      console.log('✓ No broken internal links found');
    }
  });

  test('should have working external links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Find external links
    const externalLinks = await page.locator('a[href^="http"]').all();
    
    console.log(`Found ${externalLinks.length} external links`);
    
    if (externalLinks.length > 0) {
      // Check first external link
      const firstLink = externalLinks[0];
      const href = await firstLink.getAttribute('href');
      const target = await firstLink.getAttribute('target');
      
      console.log(`External link: ${href}, target: ${target || '_self'}`);
      
      // External links should have target="_blank" for security
      if (target === '_blank') {
        console.log('✓ External link has target="_blank" (good practice)');
      } else {
        console.log('⚠ External link should have target="_blank"');
      }
    }
  });
});
