
const I = actor();

module.exports = {

	fields: 
  {
    logo: 'body > div.header-container > div > p > a',
    searchText: '#searchText',
    detailedSearch: '#searchSuggestionForm > a',
    login: 'body > div.header-container > div > ul > li.login-text > a',
    register: 'body > div.header-container > div > ul > li.register-text > a',
    advertisement:'#post-new-classified',
    mainPageDisplayWindow: '#container > div.homepage > div > div.homepage-content > div.uiBox.showcase > h3',
    vehicle: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > a',
    car: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > ul > li:nth-child(1) > a',
    land: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > ul > li:nth-child(2) > a',
    motorcycles: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > ul > li:nth-child(3) > a'
  },

  //logo,arama kutusu,detaylı arama bağlantısı, giriş, üye ol, ücretsiz ilan ver kontrolü
  seeHeader()
  {
  	I.seeElement(this.fields.logo);
  	I.seeElement(this.fields.searchText);
  	I.seeElement(this.fields.detailedSearch);

  	I.seeElement(this.fields.login);
  	I.seeElement(this.fields.register);
  	I.seeElement(this.fields.advertisement);
  },
  // anasayfa vitrini kontrolü
  seeContainer()
  {
    I.seeElement(this.fields.mainPageDisplayWindow);
  },
  //Vasıta başlığının ve altında Otomobil, Arazi, SUV & Pick-up, Motosiklet başlıkları kontrolü
  seeLeftMenu()
  {
    I.seeElement(this.fields.vehicle);
    I.seeElement(this.fields.car);
    I.seeElement(this.fields.land);
    I.seeElement(this.fields.motorcycles);
  }
}
