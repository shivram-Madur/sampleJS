describe('eBay Book Purchase', () => {

    it('api', () => {
        cy.request('GET', 'api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.bpi).to.have.property('USD');
            expect(response.body.bpi).to.have.property('GBP');
            expect(response.body.bpi).to.have.property('EUR');
            expect(response.body.bpi.GBP.description).to.equal('British Pound Sterling');
        })

    })

})