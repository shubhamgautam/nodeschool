var  mongo = require('mongodb').MongoClient;
var age =  process.argv[2];
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url,function(err,db){
	if (err) throw err;
	var parrotCollection = db.collection("parrots");
        parrotCollection.find({
		age:{
			$gt: +age
	}}).toArray(function(err,results){

		console.log(results);
		db.close();
	});

});
