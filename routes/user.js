
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.send("List of user here");
};

//to route everytime people access the url /users/* 
exports.usersrouter = function(req, res){
	var urluserpath = ((req.path).replace('/users','')).replace('/','');
	var views = 'users';
	var data = {};
	console.log(urluserpath);
	switch (urluserpath){
		case 'register':
			views = 'users/register';
			data = 	{
						title: 'Register to Join Us', 
						username:'' 
					};						
			break; 
		case 'login':
			views = 'users/login';
			data = 	{
						title: 'Login', 
						username:'' 
					};				
			break; 
		case 'setting':
			views = 'users/setting';
			data = 	{
						title: 'Setting User', 
						username:'Username' 
					};				
			break; 
		default: 
			//search user in the database base on path in username
			//then check if the user is exist
			/* if(0){
			} */
			views = 'users';
			data =	{
						title : 'User Profile',
						username : 'ExpCMSUser'
					}
			break;
	};
	
	//send response to the views
	res.render(views, data);
};

exports.submitregister = function(req, res){
  res.send("List of user here");
};