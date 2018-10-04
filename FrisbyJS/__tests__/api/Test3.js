const frisby = require('frisby');

const Joi = frisby.Joi;


it('Largest City Srinagar Jammu in India', function () {
  return frisby.get('http://services.groupkt.com/country/get/all')
    .expect('status', 200)
    .expect('header', 'content-type', /application\/json/)
    .expect('json', 'RestResponse.result.?', {name : "India"})         
    .then(function (res) {
      let index = res.json.RestResponse.result.findIndex(obj => obj.name=="India");
      let path = res.json.RestResponse.result[index].alpha3_code;
      return frisby.get('http://services.groupkt.com/state/get/' + path + '/all')
      .expect('status', 200)
      .expect('json', 'RestResponse.result.?', { id: 65, largest_city:'Srinagar Jammu'})
    });

});


