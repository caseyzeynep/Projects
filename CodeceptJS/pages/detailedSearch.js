
const I = actor();

module.exports = {

  fields: {
    detailSearch: '#searchSuggestionForm > a',
    vehicle: '/html/body/div[4]/div[2]/div[1]/div/div[1]/div/div/form/div/div/div/table/tbody/tr/td[2]/div/div/div/div/div/div/div/div/ul/li[3]',
    motorcycles: '//*[@href="/arama/detayli?category=3532"]',
    yamaha: '//*[@href="/arama/detayli?category=11757"]',
    MT07ATS: './/*[@href="/arama/detayli?category=221415"]',
    minYear: 'a269_min',
    maxYear:'a269_max',
    grey:'#categoryMeta > div > table:nth-child(5) > tbody > tr:nth-child(12) > td.second > dl > dd > div > div > div > div.scroll-pane.jspScrollable > div > div.jspPane > ul > li:nth-child(4)',
    color: '#categoryMeta > div > table:nth-child(5) > tbody > tr:nth-child(12) > td.second > dl > dd > div > div',
    security:'#categoryMeta > div > div:nth-child(9) > dl > dd > div:nth-child(7) > dl > dd > label',
    scr:'#categoryMeta > div > table:nth-child(5) > tbody > tr:nth-child(12) > td.first',
    scr1:'#categoryMeta > div > div:nth-child(9) > dl > dt > a'
  },
  submitButton: {css: '#detailedSearchForm > p > button'},

  //Detaylı Arama sayfasına geçiş
  enterDetailedSearch()
  {
  	I.click(this.fields.detailSearch);
  },

  //Kategori: Vasıta > Motosiklet > Yamaha > MT07 ABS 
  selectCategory()
  {
    I.click(this.fields.vehicle);
  	I.click(this.fields.motorcycles);
  	I.moveCursorTo(this.fields.yamaha,390,-1300);
  	I.click(this.fields.yamaha);
  	I.moveCursorTo(this.fields.MT07ATS,270,-300);
  	I.click(this.fields.MT07ATS); 
  },

  //Yıl:1998-1999
  selectYear()
  {
  	I.fillField(this.fields.minYear, '1998');
  	I.fillField(this.fields.maxYear, '1999'); 
  },

  //Renk:Gri
  selectColor()
  {
  	I.scrollTo(this.fields.scr);
  	I.click(this.fields.color);    
  	I.checkOption(this.fields.grey);
  	I.click(this.fields.color);
  },

  //Güvenlik: Çekiş Kontrolü 
  selectSecurity()
  {
  	I.scrollTo(this.fields.scr1);
    I.checkOption(this.fields.security);
    
  },

  //Arama butonuna tıklama
  submitSearch()
  {
  	I.click(this.submitButton);
  }
}
