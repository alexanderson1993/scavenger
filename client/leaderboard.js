Template.leaderboard.created = function () {
	this.subscription = Tracker.autorun(function() {
		Meteor.subscribe('teams');
		Meteor.subscribe('submissions');
		Meteor.subscribe('items');
	});
};
Template.leaderboard.destroyed = function(){
	this.subscription.stop();
}

Template.leaderboard.helpers({
	players: function () {
		return Teams.find();
	}
});

Template.player.helpers({
	name:function(){
		return this.name;
	},
	score:function(){
		var pointCount = 0;
		Submissions.find({team:this._id}).forEach(function(e){
			if (Items.findOne({_id:e.item})){
				pointCount += Items.findOne({_id:e.item}).points;
			}
		})
		return pointCount;
	}
})