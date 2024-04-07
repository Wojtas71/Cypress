describe('API Tests suit', () => {

    //  Test#1
    it('Test GET Request bez parametrów', () => {
      cy.request('GET', 'https://httpbin.org/get')
        .its('status')
        .should('equal', 200);
    });

   //   Test#2
    it('Test GET Request z parametrami', () => {
      cy.request('GET', 'https://httpbin.org/get?param1=value1&param2=value2')
        .its('status')
        .should('equal', 200);
    });
  
    //  Test#3
    it('Test POST Request', () => {
      cy.request('POST', 'https://httpbin.org/post', { key: 'value' })
        .its('status')
        .should('equal', 200);
    });
  
    //  Test#4
    it('Test z niestandardowym nagłówkiem', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/headers',
        headers: {
          'X-Custom-Header': 'custom-value'
        }
      })
      .its('status')
      .should('equal', 200);
    });

    //  Test#5
    it('Test z losowymi parametrami', () => {
      const randomParams = {
        param1: Math.random(),
        param2: Math.random()
      };
  
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        qs: randomParams
      })
      .its('status')
      .should('equal', 200);
    });
  
    //  Test#6
    it('Test sprawdzający nagłówek User-Agent', () => {
      cy.request({
        method: 'GET',
        url: 'https://httpbin.org/get',
        headers: {
          'User-Agent': 'TestUserAgent'
        }
      })
      .its('status')
      .should('equal', 200);
    });
  
    //   Test#7
    it('Test sprawdzający czas trwania wniosku', () => {
      cy.request('GET', 'https://httpbin.org/delay/2')
      .its('duration')
      .should('be.gt', 2000);
    });
  
    //    Test#8
    it('Test sprawdzający niestandardowy nagłówek w odpowiedzi', () => {
        cy.request('GET', 'https://httpbin.org/response-headers?x-custom-response-header=custom-value')
          .its('headers')
          .should('include', { 'x-custom-response-header': 'custom-value' });
      });
    
    //    Test#9
    it('Test sprawdzający treść odpowiedzi dla niepoprawnego zapytania', () => {
     cy.request({
        method: 'GET',
          url: 'https://httpbin.org/status/404',
          failOnStatusCode: false
        })
        .its('status')
        .should('equal', 404);
      });
    
    //     Test#10
    it('Test sprawdzający obsługę błędów', () => {
        cy.request({
          method: 'GET',
          url: 'https://httpbin.org/status/500',
          failOnStatusCode: false
        })
        .its('status')
        .should('equal', 500);
      });
  });