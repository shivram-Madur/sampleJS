class HomePage{

    searchTextBox(){
        // Cypress.on('uncaught:exception', (err, runnable) => {
        //     if (err.message.includes('list not defined')) {
        //         return false
        //       }
        //       else{
                return cy.get('#gh-ac')
        //       }
        // })
}

searchButton(){
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     if (err.message.includes('list not defined')) {
    //         return false
    //       }
    //       else{
            return cy.get('#gh-btn')
    //       }
    // })
}

selectItemFromSearchResults(){
    // Cypress.on('uncaught:exception', (err, runnable) => {
    //     if (err.message.includes('list not defined')) {
    //         return false
    //       }
    //       else{
            return cy.xpath("(//div[contains(@class,'s-item__info')]/a)[3]")
    //       }
    // })
}

  
}  export default HomePage