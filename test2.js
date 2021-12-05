describe('eMag.ro', () => {

    it('should load', async () => {
        await browser.url('https://www.emag.ro');
        
    });


    it('should exist a logo on the homepage', async () => {
        const logo = await $('*=eMAG');
        await expect(logo).toExist();
    });

    
    
    it('should open Resigilate', async () => {
        const veziMaiMulButton = await $('#navbar-aux-dropdown');
        veziMaiMulButton.click();

        const resigilateButton = await $('[title="Resigilate"]');
        resigilateButton.click(); 

        await expect(browser).toHaveTitle('Produse resigilate - eMAG.ro');
    });
     


    it('should open eMAG Help', async () => {
        const emagHelpButton = await $('[title="eMAG Help"]');
        await emagHelpButton.click();

        await expect(browser).toHaveUrl('https://www.emag.ro/info/?ref=hdr_help');
    });
});