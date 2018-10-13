
Feature('Test2');

Scenario('home', async (I,detailedSearchPage) => {
	I.amOnPage('sahibinden.com');
	detailedSearchPage.enterDetailedSearch();
    detailedSearchPage.selectCategory();
    detailedSearchPage.selectYear();
    detailedSearchPage.selectColor();
    detailedSearchPage.selectSecurity();
    detailedSearchPage.submitSearch();

    let result = await I.grabTextFrom('//*[@id="saveSearchResult"]');
    
    if( new String(result).valueOf() == new String('Arama filtrelerinize uygun ilan bulunamadı.').valueOf() )
    {
    	console.log("    PASS");
    }
    else
    {
    	console.log("    FAIL");
    }

});
