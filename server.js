let express = require('express');
	app = express();
	
	
app.set('port' , process.env.PORT || 5000);

app.get('/' , function(req,res){ 
	res.send('Last edited on 28th dec 2017!!!');
	res.send('Concentrate on your project!!!');
	console.log('this the console example...');	
});

app.listen(app.get('port'), function () {
    console.log('Express server listening on port -> ' + app.get('port'));
});