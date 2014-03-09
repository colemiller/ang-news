/* global app:true */
'use strict';

var app = angular.module('angNewsApp', [
	'ngCookies',
	'ngResource',
	'ngSanitize',
	'ngRoute',
	'firebase'
]);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/posts.html',
			controller: 'PostsCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
})
.constant('FIREBASE_URL', 'https://sweltering-fire-9088.firebaseio.com/');
