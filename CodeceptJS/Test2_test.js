
Feature('Test2');

Scenario('home', async (I,detailedSearchPage) => {
	I.amOnPage('https://www.sahibinden.com/arama/detayli?category=221415');
    //detailedSearchPage.selectCategory();
    detailedSearchPage.selectYear();
    detailedSearchPage.selectColor();
    detailedSearchPage.selectSecurity();
    
    //let b = await I.grabTextFrom('//*[@id="saveSearchResult"]');
    //console.log(b);
    //pause();

});
