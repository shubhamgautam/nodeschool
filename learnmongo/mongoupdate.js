var  mongo = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url,function(err,db){
	if (err) throw err;
	var userCollection = db.collection("users");

        userCollection.update({
		name:"Tina"
	},{
		$set:{
			age:40
		}
	});
	db.close()
	
});
