var configConnector = require("../DbConnector/GetConfigData")

module.exports.GetConfiguredClinet = function(req,res) { 
   var res = configConnector.GetConfiguredClinet();
   return res;
}

module.exports.GetStaticString = function(req,res) { 
    return "11111";
 }