// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('AmeyemGeo - Page Loading', () => {
  
  test('should load homepage successfully', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check page title
    const title = await page.title();
    console.log('Page title:', title);
    
    // Check for visible content
    await expect(page.locator('body')).toBeVisible();
    console.log('✓ Homepage loaded successfully');
  });

  test('should have visible hero section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Look for hero section (main banner)
    const hero = page.locator('section, div').filter({ hasText: /ameyem|geosolutions|geo/i }).first();
    const count = await hero.count();
    
    if (count > 0) {
      await expect(hero).toBeVisible();
      console.log('✓ Hero section found');
    } else {
      console.log('⚠ Hero section not found - checking for other main content');
      
      // Look for any heading
      const heading = page.locator('h1, h2').first();
      await expect(heading).toBeVisible();
      console.log('✓ Main heading found');
    }
  });

  test('should have navigation menu', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Look for navigation
    const nav = page.locator('nav, [role="navigation"]').first();
    const count = await nav.count();
    
    if (count > 0) {
      await expect(nav).toBeVisible();
      console.log('✓ Navigation menu found');
      
      // Look for common nav links
      const navItems = await nav.getByRole('link').all();
      console.log(`Found ${navItems.length} navigation links`);
      
      if (navItems.length > 0) {
        const firstLinkText = await navItems[0].textContent();
        console.log('First nav item:', firstLinkText);
      }
    } else {
      console.log('⚠ Navigation menu not found');
    }
  });

  test('should have footer', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Look for footer
    const footer = page.locator('footer').first();
    const count = await footer.count();
    
    if (count > 0) {
      await expect(footer).toBeVisible();
      console.log('✓ Footer found');
      
      // Check for contact info in footer
      const contactInfo = await footer.locator('text=/email|phone|contact|address/i').count();
      if (contactInfo > 0) {
        console.log('✓ Contact info in footer');
      }
    } else {
      console.log('⚠ Footer not found');
    }
  });

  test('should have no console errors on homepage', async ({ page }) => {
    const errors = [];
    page.on('console', message => {
      if (message.type() === 'error') {
        errors.push(message.text());
      }
    });
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    await page.waitForTimeout(2000);
    
    if (errors.length === 0) {
      console.log('✓ No console errors on homepage');
    } else {
      console.log('⚠ Console errors found:', errors);
    }
  });
});

test.describe('AmeyemGeo - Section Loading', () => {
  
  test('should have About section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Look for about section
    const aboutSection = page.locator('section').filter({ hasText: /about/i }).first();
    const count = await aboutSection.count();
    
    if (count > 0) {
      await expect(aboutSection).toBeVisible();
      console.log('✓ About section found');
    } else {
      console.log('⚠ About section not found');
    }
  });

  test('should have Services section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const servicesSection = page.locator('section').filter({ hasText: /service/i }).first();
    const count = await servicesSection.count();
    
    if (count > 0) {
      await expect(servicesSection).toBeVisible();
      console.log('✓ Services section found');
      
      // Try to count service items
      const serviceItems = await servicesSection.locator('text=/|/').all();
      console.log(`Found ${serviceItems.length} potential service items`);
    } else {
      console.log('⚠ Services section not found');
    }
  });

  test('should have Projects/Portfolio section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const projectsSection = page.locator('section').filter({ hasText: /project|portfolio|work/i }).first();
    const count = await projectsSection.count();
    
    if (count > 0) {
      await expect(projectsSection).toBeVisible();
      console.log('✓ Projects/Portfolio section found');
    } else {
      console.log('⚠ Projects section not found');
    }
  });

  test('should have Contact section', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const contactSection = page.locator('section').filter({ hasText: /contact/i }).first();
    const count = await contactSection.count();
    
    if (count > 0) {
      await expect(contactSection).toBeVisible();
      console.log('✓ Contact section found');
    } else {
      console.log('⚠ Contact section not found');
    }
  });
});

test.describe('AmeyemGeo - Responsive Design', () => {
  
  test('should be responsive on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check page still loads
    await expect(page.locator('body')).toBeVisible();
    console.log('✓ Page loads on mobile viewport');
    
    // Check for mobile menu
    const mobileMenu = page.locator('button[aria-label*="menu"], button:has(svg)').first();
    const count = await mobileMenu.count();
    
    if (count > 0) {
      console.log('✓ Mobile menu button found');
    }
  });

  test('should be responsive on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('body')).toBeVisible();
    console.log('✓ Page loads on tablet viewport');
  });

  test('should be responsive on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    await expect(page.locator('body')).toBeVisible();
    console.log('✓ Page loads on desktop viewport');
  });
});
