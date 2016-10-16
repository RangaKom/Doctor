angular.module('home', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('home').config(function($stateProvider) {

    $stateProvider.state('home', {
        url: '/home',
        templateUrl: 'home/home.html'
    });

    $stateProvider.state('home.dashboard', {
        url: '/dashboard',
        templateUrl: 'home/partial/dashboard/dashboard.html'
    });
    /* Add New States Above */

});

