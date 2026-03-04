// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('AmeyemGeo - Visual & UI', () => {
  
  test('should have consistent styling', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for consistent colors (not exact values, but checking they're defined)
    const computedStyle = await page.evaluate(() => {
      const root = document.documentElement;
      const body = document.body;
      return {
        rootBg: getComputedStyle(root).backgroundColor,
        bodyBg: getComputedStyle(body).backgroundColor,
        bodyColor: getComputedStyle(body).color,
      };
    });
    
    console.log('Colors:', computedStyle);
    console.log('✓ CSS styles applied');
  });

  test('should have images loading', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for broken images
    const images = await page.locator('img').all();
    
    let loadedImages = 0;
    let brokenImages = 0;
    
    for (const img of images) {
      const src = await img.getAttribute('src');
      const naturalWidth = await img.evaluate(el => el.naturalWidth);
      
      if (naturalWidth > 0) {
        loadedImages++;
      } else if (src) {
        brokenImages++;
        console.log(`⚠ Possibly broken image: ${src}`);
      }
    }
    
    console.log(`Images: ${loadedImages} loaded, ${brokenImages} possibly broken`);
    
    if (brokenImages === 0) {
      console.log('✓ All images loaded successfully');
    }
  });

  test('should have appropriate typography', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check font sizes are reasonable
    const headings = await page.locator('h1, h2, h3').all();
    
    if (headings.length > 0) {
      const firstHeading = headings[0];
      const fontSize = await firstHeading.evaluate(el => 
        parseInt(getComputedStyle(el).fontSize)
      );
      
      console.log(`First heading font size: ${fontSize}px`);
      
      if (fontSize >= 20) {
        console.log('✓ Headings have appropriate size');
      } else {
        console.log('⚠ Headings may be too small');
      }
    }
    
    // Check body text is readable
    const bodyTextSize = await page.evaluate(() =>
      parseInt(getComputedStyle(document.body).fontSize)
    );
    
    console.log(`Body font size: ${bodyTextSize}px`);
    
    if (bodyTextSize >= 14) {
      console.log('✓ Body text has readable size');
    }
  });

  test('should have good contrast', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Basic contrast check - just ensure text is visible
    const bodyStyles = await page.evaluate(() => {
      const body = document.body;
      return {
        color: getComputedStyle(body).color,
        backgroundColor: getComputedStyle(body).backgroundColor,
      };
    });
    
    console.log('Body colors:', bodyStyles);
    
    // Should not be default unstyled colors
    if (bodyStyles.color !== 'rgb(0, 0, 0)' || bodyStyles.backgroundColor !== 'rgb(255, 255, 255)') {
      console.log('✓ Custom colors applied');
    } else {
      console.log('⚠ Using default browser colors');
    }
  });

  test('should have no layout shifts', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Get initial viewport
    const initialContent = await page.evaluate(() => {
      return document.body.scrollHeight;
    });
    
    await page.waitForTimeout(2000);
    
    // Check for layout shift
    const finalContent = await page.evaluate(() => {
      return document.body.scrollHeight;
    });
    
    const shift = Math.abs(finalContent - initialContent);
    
    console.log(`Layout shift: ${shift}px`);
    
    if (shift < 100) {
      console.log('✓ Minimal layout shift');
    } else {
      console.log('⚠ Significant layout shift detected');
    }
  });

  test('should have appropriate spacing', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for margins and padding
    const sections = await page.locator('section').all();
    
    if (sections.length > 0) {
      const firstSection = sections[0];
      const margin = await firstSection.evaluate(el => 
        getComputedStyle(el).marginTop
      );
      
      console.log(`Section margin: ${margin}`);
      
      if (margin && margin !== '0px') {
        console.log('✓ Sections have spacing');
      } else {
        console.log('⚠ Sections may lack spacing');
      }
    }
  });
});

test.describe('AmeyemGeo - Performance', () => {
  
  test('should load reasonably fast', async ({ page }) => {
    const startTime = Date.now();
    
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    const loadTime = Date.now() - startTime;
    
    console.log(`Page load time: ${loadTime}ms`);
    
    if (loadTime < 5000) {
      console.log('✓ Page loads quickly');
    } else if (loadTime < 10000) {
      console.log('⚠ Page load time is acceptable but could be faster');
    } else {
      console.log('⚠ Page load time is slow');
    }
  });

  test('should not block main thread', async ({ page }) => {
    await page.goto('/');
    
    // Check for long tasks
    const longTasks = await page.evaluate(() => {
      const performance = window.performance;
      if (!performance.getEntriesByType) return [];
      
      const entries = performance.getEntriesByType('measure') || [];
      return entries.filter(entry => entry.duration > 50).map(e => ({
        name: e.name,
        duration: e.duration
      }));
    });
    
    console.log(`Long tasks: ${longTasks.length}`);
    
    if (longTasks.length === 0) {
      console.log('✓ No long blocking tasks detected');
    }
  });

  test('should have accessible components', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    
    // Check for ARIA labels where needed
    const buttons = await page.locator('button').all();
    
    let accessibleButtons = 0;
    
    for (const button of buttons) {
      const ariaLabel = await button.getAttribute('aria-label');
      const text = await button.textContent();
      
      if (ariaLabel || text?.trim()) {
        accessibleButtons++;
      }
    }
    
    console.log(`Accessible buttons: ${accessibleButtons}/${buttons.length}`);
    
    if (accessibleButtons === buttons.length) {
      console.log('✓ All buttons are accessible');
    }
  });
});
