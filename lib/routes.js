FlowRouter.route('/', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/logout', {
	name: 'home',
	action() {
		GAnalytics.pageview();
		AccountsTemplates.logout();
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/newLift', {
	name: 'newLift',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: "NewLift"})
	}
});

FlowRouter.route('/allLifts', {
	name: 'allLifts',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: "AllLifts"})
	}
});

FlowRouter.route('/signup', {
	name: 'signup',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: "Signup"})
	}
});

FlowRouter.route('/userInfo', {
	name: 'userInfo',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: "UserInfo"})
	}
});

FlowRouter.route('/editUser', {
	name: 'editUser',
	action() {
		GAnalytics.pageview();
		BlazeLayout.render('MainLayout', { main: "editUser"})
	}
});