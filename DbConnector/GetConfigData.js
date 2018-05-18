
module.exports.GetConfiguredClinet = function (req, clients) {

        // var clients = [];
        // clients.push(1);
        // clients.push(2);
        // clients.push(3);
        // clients.push(4);
        // return clients;


        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";

        MongoClient.connect(url, function(err, db) {
          if (err) throw err;

          var dbo = db.db("paasconfiguration");
          dbo.collection("enabledclientlist").findOne({}, function(err, clients) {
            if (err) throw err;
            console.log(clients);
            return clients;
            db.close();
          });

        });
}


// var mongo = require('mongodb'),
//   Server = mongo.Server,
//   Db = mongo.Db;
// var server = new Server('localhost', 27017, {
//   auto_reconnect: true
// });
// var db = new Db('paasconfiguration', server);
// var onErr = function (err, callback) {
//   db.close();
//   callback(err);
// };
// exports.GetConfiguredClinet = function (gname, callback) {
//   db.open(function (err, db) {
//     if (!err) {
//       db.collection('enabledclientlist', function (err, collection) {
//         if (!err) {
//           return collection;

//         } else {
//           onErr(err, callback);
//         }
//       }); //end db.collection
//     } else {
//       onErr(err, callback);
//     }
//   }); // end db.open
// };
