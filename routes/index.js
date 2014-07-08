var express = require('express');
var router = express.Router();

// ROUTE '/fakeapi/users/1'
router.route('/fakeapi/users/1')

  .get(function(req, res) {
    var fakeModel = {
      "UserDetailId": "0001",
      "FirstName": "George",
      "LastName": "Yong",
      "Email": "georgeyws@ifca.com.my",
      "Phone": "0162228603",
      "ReportTo": "Carso Leong"
    };
    res.json(fakeModel);
  });

// ROUTE '/fakeapi/myactivity/date'
router.route('/fakeapi/myactivity/date')

  .get(function(req, res) {
    var fakeModel = [
      {
        "ActivityMainID": "1",
	"Activity": "Bug Fix",
        "AccountDescription": "SP Setia Property",
        "Hours": "3"
      },
      {
	"ActivityMainID": "2",
        "Activity": "Bug Fix",
        "AccountDescription": "SP Setia Hardware",
        "Hours": "4"
      },
      {
	"ActivityMainID": "3",
        "Activity": "Bug Fix",
        "AccountDescription": "SP Setia Retail",
        "Hours": "2"
      },
      {
	"ActivityMainID": "4",
        "Activity": "Meeting",
        "AccountDescription": "SP Setia Property",
        "Hours": "1"
      }
    ];
    res.json(fakeModel);
  });


// log everytime someone uses the router
router.use(function(req, res, next) {
  console.log('Something is using our routes!');
  next();
});

router.get('/', function(req, res) {
  res.json({ Message: 'YAY!'});
});

module.exports = router;
