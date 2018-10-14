
Feature('Test3');

let searches = new DataTable(['searchText']); 
	searches.add(['Yamaha MT07']); 
	searches.add(['Yamaha MT09']);
	searches.add(['Yamaha MT25']);

Data(searches.filter(searches => searches.searchText == 'Yamaha MT07')).Scenario('test something', async (I,current) => {

	I.amOnPage('https://www.sahibinden.com/');
    I.fillField('#searchText', current.searchText);
    I.click('//*[@id="searchSuggestionForm"]/button');

    let prevResult = await I.grabTextFrom('//*[@id="wideContainer"]/div/div[2]/ul/li[1]/ul/li[1]/a/span/span');
    I.click('//*[@id="wideContainer"]/div/div[2]/ul/li[1]/ul/li[1]/a');
    let nextResult = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');

    if( new String(prevResult).valueOf() == new String(nextResult).valueOf() )
    {
        console.log("    PASS");
    }
    else
    {
        console.log("    FAIL");
    }

});

Data(searches.filter(searches => searches.searchText != 'Yamaha MT07')).Scenario('test something', async (I,current) => {

	I.amOnPage('https://www.sahibinden.com/');
    I.fillField('#searchText', current.searchText);
    I.click('//*[@id="searchSuggestionForm"]/button');
    let numberOfResult = await I.grabTextFrom('//*[@id="searchResultsSearchForm"]/div/div[3]/div[1]/div[1]/div[1]/div[1]/span');
    console.log(numberOfResult);

});

