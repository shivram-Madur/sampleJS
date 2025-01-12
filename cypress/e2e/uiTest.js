import HomePage from '../support/pages/ebayHomePage.js';
import ItemDetailsPage from '../support/pages/ebayItemDetailsPage.js';
import shoppingCart from '../support/pages/ebayShoppingCartPage.js';

const HomePages = new HomePage();
const ItemDetailsPages = new ItemDetailsPage();
const shoppingCarts = new shoppingCart();

describe('Verify item added to cart', () => {

beforeEach(() => {Cypress.on('uncaught:exception', (err, runnable) => {return false})})

it('Verify number of item added to cart', () => {

    // Visit ebay site
    cy.visit(Cypress.env('baseUrl'));

    // Search for 'book'
    HomePages.searchTextBox().type('book');
    // click on search button
    HomePages.searchButton().click();

    // Wait for search results to load and select the first item
    HomePages.selectItemFromSearchResults().invoke('removeAttr', 'target').click({ force: true });
    cy.wait(2000);

    // Activate the first item by right click -- hidden element// fake button
    ItemDetailsPages.addItemToCart().rightclick();

    // Add book to the cart by taking the href value in variable and passing it to fixture
    ItemDetailsPages.addItemToCart().then(($el) => {
    let herf = JSON.stringify($el.attr('href'));
    let geturl = '{"URL":' + herf + '}';
    cy.log(geturl);
    cy.writeFile('cypress/fixtures/users.json', geturl);
    cy.fixture('users').then((users) => {cy.visit(users.URL);})
    cy.wait(5000);})

    // Verify number of item added to cart
    shoppingCarts.itemsAddedToCart().should('have.text', '1');

    // Empty the cart to reuse the test
    shoppingCarts.removeItemsAddedToCart().click();


})


})