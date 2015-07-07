var  mongo = require('mongodb').MongoClient;
var doc =  process.argv[2];
var idval = process.argv[3];
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url,function(err,db){
	if (err) throw err;
	var docCollection = db.collection(doc);
	docCollection.remove({
		_id:idval
	});
	db.remove();
      
	
});
