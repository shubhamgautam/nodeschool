var express = require("express"),
	app = express();
app.get("/",function(req,res){
	res.end("Hellow World!!");

});

app.listen(process.argv[2]);
