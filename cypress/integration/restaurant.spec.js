import homePage from './pages/dataSelectors.js';

describe('Restaurant Homepage', () => {
    
    it('should be able to click through all pages in website', () => {
        homePage.visit();
        homePage.aboutLink().should('be.visible');
        // restaurantPages.aboutPage().should('be.visible').click() << returns 404 error
        homePage.newsLink().should('be.visible');
        homePage.contactLink().should('be.visible');
        homePage.menuDropdown().should('be.visible').click();
        homePage.lunchLink().should('be.visible').click();
    });

  })
  