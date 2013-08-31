"use strict";

var Fudge = function() {
	this.clear();
};

Fudge.prototype.put = function(key, data, live) {
	this.storage[key] = {
		value: data,
		timeout: Date.now() + live
	};
};

Fudge.prototype.get = function(key) {
	var data = this.storage[key];

	if (data) {
		if (data.timeout < Date.now()) {
			delete this.storage[key];
		} else {
			return data.value;
		}
	}

	return false;
};

Fudge.prototype.del = function(key) {
	delete this.storage[key];
};

Fudge.prototype.clear = function() {
	this.storage = {};
};


module.exports = Fudge;
