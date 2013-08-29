"use strict";

var Fudge = require("./fudge");

var FudgeFactory = function() {
	this.storage = {};
};

FudgeFactory.prototype.getFudge = function(ns) {
	var fudge = this.storage[ns];

	if (fudge) {
		return fudge;
	} else {
		fudge = new Fudge();
		this.storage[ns] = fudge;
		return fudge;
	}
};

module.exports = FudgeFactory;