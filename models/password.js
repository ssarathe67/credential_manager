const mongoose = require('mongoose');

// Pass Schema
const passSchema = mongoose.Schema({
	env:{
		type: String,
	},
	application:{
		type: String,
	},
	userId:{
		type: String
	},
	password:{
		type: String,
	},
	url:{
		type: String
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

const Pass = module.exports = mongoose.model('Passwords', passSchema);

// Get Books
module.exports.getObjects = (callback, limit) => {
	Pass.find(callback).limit(limit);
}

// Get Pass
module.exports.getObjectById = (id, callback) => {
	Pass.findById(id, callback);
}

// Add Pass
module.exports.addObject = (pass, callback) => {
	Pass.create(pass, callback);
}

// Update Pass
module.exports.updateObject = (id, object, options, callback) => {
	var query = {_id: id};
	var update = {
		env: object.env,
		application: object.application,
		userId: object.userId,
		password: object.password,
		url: object.url
	}
	Pass.findOneAndUpdate(query, update, options, callback);
}

// Delete Pass
module.exports.removeObject = (id, callback) => {
	var query = {_id: id};
	Pass.remove(query, callback);
}
