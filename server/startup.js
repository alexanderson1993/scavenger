Meteor.startup(function () {
	if (typeof Meteor.users.findOne({username:'admin'}) === 'undefined'){
		var id = Accounts.createUser({
			username: 'admin',
			email: 'alexanderson1993@gmail.com',
			password: 'voyager1'
		});
		Roles.addUsersToRoles(id, ['admin']);
	}
}); 

