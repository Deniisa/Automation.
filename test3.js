describe('libris.ro', () => {

    it('should login with correct credentials', async () => {
        await browser.url('https://www.libris.ro/');

        const login = await $('.header-menu-icon-desk');
        await login.click();

        const user = await $('.log-in-cont-form-date-inregistrare-input');
        const password = await $('.parola');

        await user.setValue('denisapop93@gmail.com');
        await password.setValue('jU$tt0practice');

        const loginButton = await $('.log-in-cont-inregistrare-btn');
        await loginButton.click();

        await expect(browser).toHaveTitle('Librarie online - Carti, Jocuri, Muzica');
    });




    it('should not login with incorrect credentials', async () => {
        const login = await $('.header-menu-icon-desk');
        await login.click();

        const user = await $('.log-in-cont-form-date-inregistrare-input');
        const password = await $('.parola');

        await user.setValue('florina');
        await password.setValue('111'); 

        const loginButton = await $('.log-in-cont-inregistrare-btn');
        await loginButton.click();

        await expect(browser).toHaveUrl('https://www.libris.ro/auth/login.jsp?error=Utilizator+sau+parola+incorecte!');

    });




    it('should add to favorites', async () => {

        const login = await $('.header-menu-icon-desk');
        await login.click();

        const user = await $('.log-in-cont-form-date-inregistrare-input');
        const password = await $('.parola');

        await user.setValue('denisapop93@gmail.com');
        await password.setValue('jU$tt0practice');

        const loginButton = await $('.log-in-cont-inregistrare-btn');
        await loginButton.click();

        await expect(browser).toHaveTitle('Librarie online - Carti, Jocuri, Muzica');

        const searchBox = await $('#autoComplete');
        const searchButton = await $('#autoCompleteButton');

        await searchBox.setValue('lego');
        await searchButton.click();
        await expect(browser).toHaveUrl('https://www.libris.ro/search?iv.q=lego');


        const addToFav = await $('/html/body/main/div/section[3]/div/div[2]/section[2]/div/ul/li[1]/div/div[3]/div/a/img');
        await addToFav.click();

        const wishlistButton = await $('/html/body/header/div[3]/div/div[3]/ul/li[3]/a/img');
        await wishlistButton.click();
        await expect(browser).toHaveUrl('https://www.libris.ro/account/myWishlist');
      
    });
});