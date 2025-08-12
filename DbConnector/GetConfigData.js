
module.exports.GetConfiguredClient = function (callback) {
        var MongoClient = require('mongodb').MongoClient;
        
        // Use environment variable for connection string, with fallback to localhost
        var url = process.env.MONGODB_CONNECTION_STRING || "mongodb://localhost:27017/";
        var dbName = process.env.MONGODB_DATABASE || "paasconfiguration";
        
        console.log('Attempting to connect to MongoDB with URL:', url);
        
        MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err, client) {
          if (err) {
            console.error('Error connecting to MongoDB:', err.message);
            if (callback) callback(err, null);
            return;
          }

          try {
            var dbo = client.db(dbName);
            dbo.collection("enabledclientlist").findOne({}, function(err, result) {
              if (err) {
                console.error('Error finding data:', err.message);
                client.close();
                if (callback) callback(err, null);
                return;
              }
              
              console.log('Retrieved client data:', result);
              client.close();
              if (callback) callback(null, result);
            });
          } catch (error) {
            console.error('Error accessing database:', error.message);
            client.close();
            if (callback) callback(error, null);
          }
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
