const frisby = require('frisby');

const Joi = frisby.Joi;


it('should be a teapot', function () {
  return frisby.get('http://services.groupkt.com/country/get/all')
    .expect('status', 200)

    .expect('header', 'content-type', /application\/json/)
    .expect('jsonTypes', 'RestResponse.result.?', {})
    .then(function (res) {
        expect(res.json.RestResponse.result.length).toEqual(249)
        var sortedData = new Array(res.json.RestResponse.result.length);
        let i;
        for( i = 0; i <res.json.RestResponse.result.length; i++)
        {
            sortedData[i] = res.json.RestResponse.result[i];
         }
        sortedData.sort(function (a, b) {
        return a.name.localeCompare(b.name);
        });
        //for( i = 0; i <249; i++)
        //{
            //console.log(sortedData[i].name + " " + res.json.RestResponse.result[i].name);
         //}
        expect(res.json.RestResponse.result).toEqual(sortedData); 
      })

    .expect('json', 'RestResponse.result.?', {name : "Turkey"})
    .expect('json', 'RestResponse.result.?', {alpha2_code : "TR"})
    .expect('json', 'RestResponse.result.?', {alpha3_code : "TUR"})


 });

