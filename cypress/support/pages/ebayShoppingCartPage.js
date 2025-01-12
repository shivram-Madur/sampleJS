class shoppingCart{
    itemsAddedToCart(){
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     if (err.message.includes('list not defined')) {
        //         return false
        //       }
        //       else{
                return cy.get('#gh-cart-n')
        //       }
        // })
}
removeItemsAddedToCart(){
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     if (err.message.includes('list not defined')) {
    //         return false
    //       }
    //       else{
            return cy.xpath("//*[@data-test-id='cart-remove-item']")
    //       }
    // })
}

} export default shoppingCart