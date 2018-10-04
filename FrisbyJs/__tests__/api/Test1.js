const frisby = require('frisby');

const Joi = frisby.Joi;


it('should be a teapot', function () {
  return frisby.get('http://services.groupkt.com/country/get/all')
    .expect('status', 200)

    .expect('header', 'content-type', /application\/json/)
    .expect('jsonTypes', 'RestResponse.result.?', {})
    .then(function (res) {
        expect(res.json.RestResponse.result.length).toEqual(249)
        let data = res.json.RestResponse.result;
        data.sort(function (a, b) {
        return a.name.localeCompare(b.name);
        });
        expect(res.json.RestResponse.result).toEqual(data); 
      })
    .expect('json', 'RestResponse.result.?', {name : "Turkey"})
    .expect('json', 'RestResponse.result.?', {alpha2_code : "TR"})
    .expect('json', 'RestResponse.result.?', {alpha3_code : "TUR"})


 });

