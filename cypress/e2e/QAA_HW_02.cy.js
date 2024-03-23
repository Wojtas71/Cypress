// Test nr 1
describe("Testy Moduł 2", () => {
        it("Wpisz email user888", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        cy.get('#user_email').type('user888@gmail.com');
        cy.get('#user_password').type('1234567890');
        cy.get('.eckniwg2').click();
        cy.wait(5000);
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible");
        cy.wait(5000);
        cy.get(':nth-child(12) > .next-bve2vl').click();
        });
      
        it("Wpisz email testowyqa", () => {
        cy.visit("https://www.edu.goit.global/account/login");
        // cy.get('#user_email').scrollIntoView().should("be.visible").type('testowyqa@qa.team');
        // cy.get('#user_password').scrollIntoView().should("be.visible").type('QA!automation-1');
        cy.login("testowyqa@qa.team", "QA!automation-1");
        cy.get('[type="submit"]').should("have.text", "Log in").click();
        cy.get('#open-navigation-menu-mobile').scrollIntoView().should("be.visible").wait(3000).click();
        cy.get(':nth-child(8) > .next-bve2vl').click();
        });
    });



    // describe("login test", () => {
    //     it("admin login", () => {
    //       cy.visit("somesite.com");
    //           cy.login("admin", "adminPassword");
    //     });