// Test nr 2

import { Login } from '../pages/Login';
import { HomePage } from '../pages/HomePage';

const loginPage = new Login();
const homePage = new HomePage();

describe('Testing the login page', () => {
    it('Test 1: should login and logout with user888@gmail.com', () => {
        loginPage.visit();
        loginPage.login('user888@gmail.com', '1234567890');
        homePage.logout();
    });
});

describe('Testing the login page', () => {
    it('Test 2: should login and logout with testowyqa@qa.team', () => {
        loginPage.visit();
        loginPage.login('testowyqa@qa.team', 'QA!automation-1');
        homePage.logout();
    });
});
    
 














// describe("Testy Moduł 2", () => {
//         it("Wpisz email user888", () => {
//         cy.visit("https://www.edu.goit.global/account/login");
//         cy.login("user888@gmail.com", "1234567890");
//         cy.get('[type="submit"]').should("have.text", "Log in").click();
//         cy.get('#open-navigation-menu-mobile').click();
//         cy.get(':nth-child(12) > .next-bve2vl').scrollIntoView().should("be.visible");
//         cy.wait(5000);
//         cy.get(':nth-child(12) > .next-bve2vl').click();
//         });
      
//         it("Wpisz email testowyqa", () => {
//         cy.visit("https://www.edu.goit.global/account/login");
//         cy.login("testowyqa@qa.team", "QA!automation-1");
//         cy.get('[type="submit"]').should("have.text", "Log in").click();
//         cy.get('#open-navigation-menu-mobile').scrollIntoView().should("be.visible").wait(3000).click();
//         cy.get(':nth-child(8) > .next-bve2vl').click();
//         });
//     });

