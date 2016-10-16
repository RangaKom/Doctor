angular.module('Doctor', ['ui.bootstrap', 'ui.router', 'ngAnimate', 'home', 'pasient']);

angular.module('Doctor').config(function($stateProvider, $urlRouterProvider) {

    /* Add New States Above */
    $urlRouterProvider.otherwise('/home/dashboard');

});

angular.module('Doctor').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
