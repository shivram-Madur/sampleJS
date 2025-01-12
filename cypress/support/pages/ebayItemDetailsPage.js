class ItemDetailsPage {
    addItemToCart() {
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     if (err.message.includes('list not defined')) {
        //         return false
        //       }
        //       else{
                return cy.xpath("(//a[@data-testid='ux-call-to-action'])[4]")
        //       }
        // })
}

} export default ItemDetailsPage