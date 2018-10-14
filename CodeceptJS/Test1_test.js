
Feature('Test1');

Scenario('home', async (I,homePage) => {
	
    I.amOnPage('https://www.sahibinden.com/');
    homePage.seeHeader();
    homePage.seeContainer();

    let numberOfImage = await I.grabNumberOfVisibleElements('//*[@id="container"]/div[3]/div/div[2]/div[3]/ul/li');

    if( numberOfImage == 56 )
    {
    	console.log("    PASS");
    }
    else
    {
		console.log("    FAIL");
    }
    
    homePage.seeLeftMenu();

});
