describe('eMag.ro', () => { 
    it('should load', async () => {    
        await browser.url('http://emag.ro');

        const searchBox = await $('#searchboxTrigger');

        const helplink = await $('.navbar-aux-help-link');

        const firstButton = await $('//*[@id="main-container"]/section[3]/div/div/div[1]');

        helplink.click();
    });


    it('should have the correct page title', async () => {
        await browser.url('https://www.emag.ro/');
        await expect(browser).toHaveTitle('eMAG.ro - Libertate în fiecare zi');
    });


    it('should contain a cart button', async () => {
        const cartButton = await $('#my_cart');
        await expect(cartButton).toBeDisplayed();
    });

    it('should open eMag Genius', async () => {
        const geniusButton = await $('[title="eMAG Genius"]');
        await geniusButton.click();
        await expect(browser).toHaveTitle('eMAG genius: serviciul tău premium de cumpărături - eMAG.ro')
    });


    it('should have a working search', async () => {
        const searchBox = await $('#searchboxTrigger');
        const searchButton = await $('.searchbox-submit-button');

        await searchBox.setValue('Tricou polo');
        await searchButton.click();

        await expect(browser).toHaveTitle('Cauți Tricou polo? Alege din oferta eMAG.ro');

    });

    
});


