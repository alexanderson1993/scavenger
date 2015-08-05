	Template.slideshow.rendered = function(){
		this.subscription = Tracker.autorun(function() {
			Meteor.subscribe('teams');
			Meteor.subscribe('submissions');
			Meteor.subscribe('items');
		});
		$('.carousel').carousel({
			interval: 2500,
			pause: null,

		})
	}
	
	Template.slideshow.helpers({
		submission:function(){
			return Submissions.find();
		},
		imageSource:function(){
			return Images.findOne({_id:this.picture}).url();
		},
		teamName:function(){
			return Teams.findOne({_id:this.team}).name;
		},
		itemName:function(){
			return Items.findOne({_id:this.item}).name;
		}
	})