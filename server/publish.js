Meteor.publish('lifts', function() {
	return Lifts.find({author: this.userId});
});