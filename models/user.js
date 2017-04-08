var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/nodeauth') //this the mongo db database created for this application which we created before
var db= mongoose.connection;

//User Schema
var userSchema = mongoose.Schema({
	username:{
		type: String,
		index: true
	},
	password: {
		type: String
	},
	email: {
		type: String
	},
	name: {
		type: String
	},
	profileimage: {
		type: String
	}
});

var User = module.exports=mongoose.model('User',userSchema);

module.exports.createUser = function(newUser,callback){
	newUser.save(callback);
}