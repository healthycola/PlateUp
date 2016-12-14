import { Template } from 'meteor/templating';

Template.registerHelper( 'capitalize', (str) => {
  if (str.length > 0) {
	    return str.charAt(0).toUpperCase() + str.substring(1);
	} else {
		return str
	}
});

Template.registerHelper( 'calculateAge', (birthday) => {
    var ageDifMs = Date.now() - birthday.getTime();
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
});

Template.editUser.helpers({
    profile () {
        if(Meteor.user())
        	console.log(Meteor.user())
            return Meteor.user()
    },
    womenWeightClasses () {
    	return [
    		{label: "47 kg", value: 47},
    		{label: "52 kg", value: 52},
    		{label: "63 kg", value: 63},
    		{label: "72 kg", value: 72},
    		{label: "84 kg", value: 84},
    		{label: "84+ kg", value: 85}
    	]
    },
    menWeightClasses () {
    	return [
    		{label: "59 kg", value: 59},
    		{label: "66 kg", value: 66},
    		{label: "74 kg", value: 74},
    		{label: "83 kg", value: 93},
    		{label: "105 kg", value: 105},
    		{label: "120 kg", value: 120},
    		{label: "120+ kg", value: 121}
    	]
    }
});