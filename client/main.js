Template.submit.events({
	'change .myFileInput': function(event, template) {
		var files = event.target.files;
		for (var i = 0, ln = files.length; i < ln; i++) {
			Images.insert(files[i], function (err, fileObj) {
        		// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        	});
		}
	},
	'click .submit':function(e,t){
		var files = t.find('#picture').files;
		Images.insert(files[0], function (err, fileObj) {
        	// Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
        	var obj = {
        		team: t.find('#team').value,
        		item: t.find('#item').value,
        		picture: fileObj._id
        	};
        	Submissions.insert(obj);
        	t.find('#team').value = null;
        	t.find('#item').value = null;
        	t.find('#picture').files = null;
        });

	}
})

Template.submit.helpers({
	teams:function(){
		return Teams.find();
	},
	items:function(){
		return Items.find();
	}
})