Lifts = new Mongo.Collection('lifts');
Lifts.allow({
	insert: function(userId, doc) {
		return !!userId;
	}
});

LiftSchema = new SimpleSchema({
	type: {
		type: String,
		label: "Type",
		allowedValues: ['Bench Press', 'Squat', 'Deadlift']
	},
	weight: {
		type: Number,
		label: "Weight"
	},
	reps: {
		type: Number,
		label: "Reps"
	},
	notes: {
		type: String,
		label: "Notes",
		optional: true,
		autoform: {
			rows: 6
		}
	},
	vidLink: {
		type: String,
		optional: true,
		label: "Video Link"
	},
	author: {
		type: String,
		label: "Author",
		autoValue: function() {
			return this.userId
		},
		autoform: {
			type: "hidden"
		}
	},
	createdAt: {
		type: Date,
		label: "Created At",
		autoValue: function() {
			return new Date()
		},
		autoform: {
			type: "hidden"
		}
	}
});

Lifts.attachSchema(LiftSchema);