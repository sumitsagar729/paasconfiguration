var configConnector = require("../DbConnector/GetConfigData")

module.exports.GetConfiguredClient = function(callback) { 
   configConnector.GetConfiguredClient(function(err, result) {
       if (err) {
           console.error('Error getting configured client:', err.message);
           if (callback) callback(err, null);
           return;
       }
       if (callback) callback(null, result);
   });
}

module.exports.GetStaticString = function(req,res) { 
    return "11111";
 }