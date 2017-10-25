var config = require('./config');
var MongoClient = require('mongodb').MongoClient;

MongoClient.connect(config.database, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});
