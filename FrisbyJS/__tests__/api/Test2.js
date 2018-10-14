const frisby = require('frisby');

const Joi = frisby.Joi;

it('USA Test', function () 
{
  return frisby.get('http://services.groupkt.com/state/get/USA/all')
    .expect('status', 200)
    .expect('header', 'content-type', /application\/json/)
    .expect('jsonTypes', 'RestResponse.result.?', {})
 	  .expect('jsonTypes', 'RestResponse.result.?', 
    { 
      'id': Joi.number().required(),
      'country': Joi.string().required(),
      'name': Joi.string().required(),
      'abbr': Joi.string().required(),
      'area': Joi.string().required(),
      'capital': Joi.string().required(),
      'largest_city': Joi.string().required(),
    })                       
 });

