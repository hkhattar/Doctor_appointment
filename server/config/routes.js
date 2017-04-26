var path = require('path');
var users = require('../controllers/users.js')//we can get functions from friends
module.exports = function(app){

	app.get('/',function(req,res){
		users.show_appointments(req,res)
	})

	app.get('/new_appointment', function(req, res) {
		// console.log('/users')
   		users.create_appointment(req,res)
    
	})

	
}