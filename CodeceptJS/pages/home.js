
const I = actor();

module.exports = {

	fields: {
    logo: 'body > div.header-container > div > p > a',
    aramakutusu: '#searchText',
    detayliArama: '#searchSuggestionForm > a',
    giris: 'body > div.header-container > div > ul > li.login-text > a',
    uyeol: 'body > div.header-container > div > ul > li.register-text > a',
    ilan:'#post-new-classified',
    anasayfaVitrini: '#container > div.homepage > div > div.homepage-content > div.uiBox.showcase > h3',
    vasita: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > a',
    otomobil: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > ul > li:nth-child(1) > a',
    arazi: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > ul > li:nth-child(2) > a',
    motorsiklet: '#container > div.homepage > div > aside > div:nth-child(1) > nav > ul.categories-left-menu > li.category-3517 > ul > li:nth-child(3) > a'
  },

  // introducing methods
  seeHeader()
  {
	I.seeElement(this.fields.logo);
	I.seeElement(this.fields.aramakutusu);
	I.seeElement(this.fields.detayliArama);

	I.seeElement(this.fields.giris);
	I.seeElement(this.fields.uyeol);
	I.seeElement(this.fields.ilan);
  },
  seeContainer()
  {
    I.seeElement(this.fields.anasayfaVitrini);
  },
  seeLeftMenu()
  {
    I.seeElement(this.fields.vasita);
    I.seeElement(this.fields.otomobil);
    I.seeElement(this.fields.arazi);
    I.seeElement(this.fields.motorsiklet);

  }

  
}
