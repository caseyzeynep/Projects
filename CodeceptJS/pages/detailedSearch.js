
const I = actor();

module.exports = {

  fields: {
    vasıta: {css:'body > div.header-container > div > p > a'},
    motorsiklet: '#searchText',
    yamaha: {xpath:'//*[@id="searchSuggestionForm"]/a'},
    MT07ATS: {css:'body > div.header-container > div > ul > li.login-text > a'},
    minyil: 'a269_min',
    maxyil:'a269_max',
    gri:'#categoryMeta > div > table:nth-child(5) > tbody > tr:nth-child(12) > td.second > dl > dd > div > div > div > div.scroll-pane.jspScrollable > div > div.jspPane > ul > li:nth-child(4)',
    renk: '#categoryMeta > div > table:nth-child(5) > tbody > tr:nth-child(12) > td.second > dl > dd > div > div',
    guvenlik:'#categoryMeta > div > div:nth-child(9) > dl > dd > div:nth-child(7) > dl > dd > label',
    scr:'#categoryMeta > div > table:nth-child(5) > tbody > tr:nth-child(12) > td.first',
    scr1:'#categoryMeta > div > div:nth-child(9) > dl > dt > a',
  },
  submitButton: {css: '#detailedSearchForm > p > button'},

  // introducing methods
  selectCategory()
  {
    I.click({css:'#searchSuggestionForm > a'});
    I.amOnPage('https://www.sahibinden.com/arama/detayli');
    I.click({xpath:'//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[1]/div/div/div/ul/li[3]/span'});
    I.click({xpath:'//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[2]/div/div/div[1]/ul/li[4]/span'});

    I.click('//*[@href="/arama/detayli?category=3517"]');
	I.click('//*[@href="/arama/detayli?category=3532"]');
	I.moveCursorTo('//*[@href="/arama/detayli?category=11757"]',390,-1305);
	I.click('//*[@href="/arama/detayli?category=11757"]');
	I.moveCursorTo('//*[@href="/arama/detayli?category=221415"]',275,-295);
	I.click('//*[@href="/arama/detayli?category=221415"]'); 

    /*I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[10]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[14]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[18]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[22]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[26]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[30]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[34]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[38]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[42]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[46]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[50]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[54]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[58]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[62]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[66]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[70]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[74]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[78]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[82]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[86]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[90]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[94]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[98]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[102]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[106]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[110]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[114]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[118]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[122]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[126]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[130]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[134]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[138]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[142]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[146]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[150]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[154]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div/div/div[3]/div/div/div[1]/ul/li[158]/span');


	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[10]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[14]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[18]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[22]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[26]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[30]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[34]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[38]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[42]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[46]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[50]/span');
	I.click('//*[@id="categoryMeta"]/div/div[1]/table/tbody/tr/td[2]/div/div/div[1]/div/div[4]/div/div/div[1]/ul/li[53]/span');*/
},

  selectYear()
  {
    I.fillField(this.fields.minyil, '1998');
    I.fillField(this.fields.maxyil, '1999'); 
    //pause(); 
  },
  selectColor()
  {
  	I.scrollTo(this.fields.scr);
    I.click(this.fields.renk);    
    I.checkOption(this.fields.gri);
    I.click(this.fields.renk);

  },
  selectSecurity()
  {
  	I.scrollTo(this.fields.scr1);
    I.checkOption(this.fields.guvenlik);
    pause();
    I.click(this.submitButton);
  }
}
