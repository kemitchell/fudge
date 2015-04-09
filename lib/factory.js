"use strict";
let Fudge = require("./fudge");

let FudgeFactory = function() {
	this.storage = {};
};

FudgeFactory.prototype.getCache = function(ns) {
	let fudge = this.storage[ns];

	if (fudge) {
		return fudge;
	} else {
		fudge = new Fudge();
		this.storage[ns] = fudge;
		return fudge;
	}
};

module.exports = FudgeFactory;
