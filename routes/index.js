var express = require('express');
var clientWorkFlow = require(".././workflow/ClientWorkflow");


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  var clients = clientWorkFlow.GetConfiguredClinet();
  var clientList = JSON.stringify(clients);
  var staticString = clientWorkFlow.GetStaticString();

  res.render('index', { title: 'Express', clients: clientList, staticString: staticString });
});  
 
module.exports = router;
