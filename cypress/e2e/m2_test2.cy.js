describe("Pierwszy blok testów", () => {
    it("Wpisz email user888", () => {
    cy.visit("https://www.edu.goit.global/account/login");
    cy.get('#user_email').scrollIntoView().should("be.visible").type('testowyqa@qa.team');
    cy.get('#user_password').scrollIntoView().should("be.visible").type('QA!automation-1');
    cy.get('[type="submit"]').should("have.text", "Log in").click();
    cy.get('#open-navigation-menu-mobile').scrollIntoView().should("be.visible").wait(3000).click();
    cy.get(':nth-child(8) > .next-bve2vl').click();
    });
});