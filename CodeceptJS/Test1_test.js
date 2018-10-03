
Feature('Test1');

Scenario('home', async (I,homePage) => {
	I.amOnPage('/');
    homePage.seeHeader();
    homePage.seeContainer();
    let a = await I.grabNumberOfVisibleElements('//*[@id="container"]/div[3]/div/div[2]/div[3]/ul/li');
    if(a == 56)
    {
    	console.log("    PASS");
    }
    else
    {
		console.log("    FAIL");
    }
    homePage.seeLeftMenu();

});
