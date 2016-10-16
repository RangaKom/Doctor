angular.module('home', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('home').config(function($stateProvider) {

    $stateProvider.state('dashboard', {
        url: '/dashboard',
        templateUrl: 'home/partial/dashboard/dashboard.html'
    });
    /* Add New States Above */

});

