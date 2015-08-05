Router.route('/',{
	action: function(){
		this.render('submit');
	}
})

Router.route('/leaderboard',{
	action: function(){
		this.render('leaderboard');
	}
})

Router.route('/slideshow',{
	action:function(){
		this.render('slideshow');
	}
})