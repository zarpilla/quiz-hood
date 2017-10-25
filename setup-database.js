var config = require('./config');
var MongoClient = require('mongodb').MongoClient;
var mongoose    = require('mongoose');
var User   = require('./app/models/user'); // get our mongoose model

mongoose.connect(config.database); // connect to database

// create db
MongoClient.connect(config.database, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();

  console.log("Deleting users!");

  User.collection.drop();
  console.log("... dropped users!");

  console.log("Creating users!");
  
  // create a sample user
  var admin = new User({ 
	  name: 'admin', 
	  password: '$2a$10$BrLKthj0U8u/J5CjZaLgW.Sy75Mc6IR5eOvTSJ78WSIuJk5WLbqy6',
	  admin: true 
  });
  admin.save(function(err) {
	  if (err) throw err;
  
	  console.log('User saved successfully');
	  //res.json({ success: true });
  });
  
  var other = new User({ 
	  name: 'user', 
	  password: '$2a$10$BrLKthj0U8u/J5CjZaLgW.Sy75Mc6IR5eOvTSJ78WSIuJk5WLbqy6',
	  admin: false 
  });
  other.save(function(err) {
	  if (err) throw err;
  
	  console.log('User saved successfully');
	  //res.json({ success: true });
  });

  
});


