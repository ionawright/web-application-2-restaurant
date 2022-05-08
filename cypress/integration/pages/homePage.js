const homePage = {
    visit: () => cy.visit('localhost:8080'),
    aboutLink: () => cy.get('[data-selector="about-link"]'),
    menuDropdown: () => cy.get('[data-selector="menu-dropdown-link"]'),
    lunchLink: () => cy.get('[data-selector="lunch-link"]'),
    dinnerLink: () => cy.get('[data-selector="dinner-link"]'),
    newsLink: () => cy.get('[data-selector="news-link"]'),
    contactLink: () => cy.get('[data-selector="contact-link"]'),
};

export default homePage;