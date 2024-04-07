describe('httpbin test suit', () => {

    // Test #1
    it('GET request - Check status code', () => {
        cy.request('GET', 'https://httpbin.org/get')
            .its('status')
            .should('equal', 200);
    });

    // Test #2
    it('POST request - Check status code', () => {
        cy.request('POST', 'https://httpbin.org/post', {})
            .its('status')
            .should('equal', 200);
    });

    // Test #3
    it('PUT request - Check status code', () => {
        cy.request('PUT', 'https://httpbin.org/put', {})
            .its('status')
            .should('equal', 200);
    });

    //  Test #4
    it('DELETE request - Check status code', () => {
        cy.request('DELETE', 'https://httpbin.org/delete')
            .its('status')
            .should('equal', 200);
    });

    //  Test #5
    it('HEAD request - Check status code', () => {
        cy.request('HEAD', 'https://httpbin.org/get')
            .its('status')
            .should('equal', 200);
    });

    //  Test #6
    it('OPTIONS request - Check status code', () => {
        cy.request('OPTIONS', 'https://httpbin.org/get')
            .its('status')
            .should('equal', 200);
    });

    //   Test #7
    it('Check response headers', () => {
        cy.request('GET', 'https://httpbin.org/get')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json');
    });

    //    Test #8
    it('Check request duration', () => {
        cy.request('GET', 'https://httpbin.org/delay/1')
            .then(response => {
                expect(response.duration).to.be.greaterThan(1000);
            });
    });

    // Test #9
    it('Send and check custom headers', () => {
        const headers = {
            'Custom-Header': 'TestCypress',
            'Content-Type': 'application/json'
        };
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/headers',
            headers: headers
        }).then(response => {
            expect(response.status).to.equal(200);
            expect(response.body.headers['Custom-Header']).to.equal('TestCypress');
            expect(response.body.headers['Content-Type']).to.equal('application/json');
        });
    });

    //  Test #10
    it('Send and check query parameters', () => {
        for (let i = 0; i < 5; i++) {
            const randomValue = Math.random().toString(36).substring(7);
            cy.request('GET', `https://httpbin.org/get?param${i}=${randomValue}`)
                .then(response => {
                    expect(response.status).to.equal(200);
                    expect(response.body.args[`param${i}`]).to.equal(randomValue);
                });
        }
    });
});