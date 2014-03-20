var Roller = Ember.Application.create({
    LOG_TRANSITIONS: true,
    LOG_BINDINGS: true,
    LOG_VIEW_LOOKUPS: true,
    LOG_STACKTRACE_ON_DEPRECATION: true,
    LOG_VERSION: true,
    debugMode: true
});

Roller.Router.map(function () { 
    this.resource("roll");
    this.resource("roll2" , {path: "/road-not-taken"});
    this.resource("roll3" , {path: "/highway-to-heaven"}, function(){
    	this.route("gate");
    });
    
});

//Index Route
Roller.IndexRoute = Ember.Route.extend({
	setupController: function(controller) {
	    // Set the IndexController's `title`
	    controller.set('on_index', "You are in the index page");
	  }
});

Roller.RollRoute = Ember.Route.extend({
	setupController: function(controller){
		controller.set('on_roll', "You are in the roll page");
		controller.set('second', "This is the second on the roll page");
	}
});
