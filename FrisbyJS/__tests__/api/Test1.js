const frisby = require('frisby');

const Joi = frisby.Joi;

it('Country Test', function () 
{
  return frisby.get('http://services.groupkt.com/country/get/all')
    .expect('status', 200)
    .expect('header', 'content-type', /application\/json/)
    .expect('jsonTypes', 'RestResponse.result.?', {})
    .expect('json', 'RestResponse.result.?', { name : "Turkey", alpha2_code : "TR",alpha3_code : "TUR"})
    .then(function (res) 
    { 
        expect(res.json.RestResponse.result.length).toEqual(249) 
        var sortedData = new Array(res.json.RestResponse.result.length);
        let i;

        for( i = 0; i < res.json.RestResponse.result.length; i++)
        {
            sortedData[i] = res.json.RestResponse.result[i];
        }

        sortedData.sort(function (a, b) 
        {
            return a.name.localeCompare(b.name);
        });

        expect(res.json.RestResponse.result).toEqual(sortedData); 
      })
});

