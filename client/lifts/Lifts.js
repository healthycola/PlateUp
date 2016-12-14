Meteor.subscribe('lifts');

Template.AllLifts.helpers({
	lifts: () => {
		return Lifts.find({});
	}
});