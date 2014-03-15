var mongoose = require('mongoose');
//this imports the mongoose module
mongoose.connect('mongodb://localhost/mydata');
var db = mongoose.connection;
exports.connect = db;

var Schema = mongoose.Schema; //this isn't really necessary, just nice

var userSchema = Schema({
	"username": String,
	"password": String,
    "firstname": String,
    "lastname": String
	//use quotes around fields like "username", because it's safer
});
//schema is the structure for your data
//you can create several schemas within your database for different kinds of data
//collections: contains one kind of data; several per database

var User = mongoose.model('User', userSchema);
//model gives us an object (User) which has functions that allow us to create, destroy "user" objects

exports.User = User;

//User.find({username:"sid"});
//mongoose.model gives you the User object, which has the "find" method. 
//User.findOne
//User.findAndRemove
//User.update
//User.save
//etc...
//CRUD: Create, update and destroy: mongo usually has these functions built in.