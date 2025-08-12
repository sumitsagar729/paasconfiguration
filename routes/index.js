var express = require('express');
var clientWorkFlow = require(".././workflow/ClientWorkflow");


var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  clientWorkFlow.GetConfiguredClient(function(err, clients) {
    var clientList = "undefined";
    var staticString = clientWorkFlow.GetStaticString();
    
    if (err) {
      console.error('Error retrieving clients:', err.message);
      clientList = "Error retrieving client data: " + err.message;
    } else {
      clientList = JSON.stringify(clients || "No clients found");
    }

    res.render('index', { 
      title: 'Express', 
      clients: clientList, 
      staticString: staticString 
    });
  });
});  
 
module.exports = router;
