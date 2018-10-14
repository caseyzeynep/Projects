
Feature('Test2');

Scenario('Test2', async (I,detailedSearchPage) => {
	I.amOnPage('https://www.sahibinden.com/');
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
