describe("Pierwszy blok testów", () => {
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
});