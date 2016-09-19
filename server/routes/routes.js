var router = require("express").Router();
var request = require('request');
var db = require('../database/db.js');
var mysql = require('mysql');

// var knex = require('knex')(db);
// var Promise = require("bluebird");

// DB ====================================================================== */

// GET USERNAME
router.post('/user-account/', function(req, res) {
  db.knex.select('*')
  .from('users')
  .where({'username': req.query.username})
  .then(function(user) {
    res.send(user);
  })
  .catch(function(error) {
    console.error(error)
  });
});

// router.get('/user-account', function (req, res) {
//   Users.fetch()
//     .then(function(user) {
//       console.log("SUCCESS: ", user);
//       res.send(user);
//     });
// });




//





// HOTEL SEARCH ============================================================ */
router.post("/HotelSearch", function(req, res) {

  console.log('>> ENTER /HotelSearch');

  console.log('request: ', req.body);
  var urlAPI = 'http://terminal2.expedia.com:80/x/mhotels/search?city='+req.body.city+'&checkInDate='+req.body.checkInDate+'&checkOutDate='+req.body.checkOutDate+'&room1=2&apikey=OPwVzGiq1hnLYYTDwQI2Uqjt5OPrt767';

  request({ url: urlAPI }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });

  // var urlAPI = 'https://api.meetup.com/2/categories?key=4e47134a736d2f51696c4b8653b684c&sign=true';
 
  // request({url: urlAPI}, function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     res.send(body);
  //   }
  // });

});

module.exports = router;