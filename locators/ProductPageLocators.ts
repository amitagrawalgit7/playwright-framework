export const productPageLocators = {
    settingIcon : "#react-burger-menu-btn",
    logoutLink : "#logout_sidebar_link",
    aboutLink : "#about_sidebar_link",
    //requestDemoButton : "a[href='/request-demo']",
    requestDemoButton: "a[href='/request-demo']:has-text('Book a Demo')",
    //tryifFreeButton : "button:has-text('Try it free')",
    tryifFreeButton : "a[href='https://saucelabs.com/sign-up']:has-text('Start Free')",
    //Start Free
    productNames : ".inventory_item_name",
    productDescription : ".inventory_item_desc",
    productPrices : ".inventory_item_price",
    addToCartButtons : ".btn.btn_small.btn_inventory",
    filterDropdown : ".product_sort_container",
    // filterNameAtoZ : "option[value='az']",
    // filterNameZtoA : "option[value='za']",
    // filterPriceLowtoHigh : "option[value='lohi']",
    // filterPriceHightoLow : "option[value='hilo']",
    cartLink : '.shopping_cart_link'
}