'use strict'

angular
	.module('shared.header')
	.controller('HeaderCtrl', ['$scope', function($scope) {
		var self = this;
		self.appName = 'Tech Imposant';
		self.appLogo = 'logo.png';
	}]
);