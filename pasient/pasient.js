angular.module('pasient', ['ui.bootstrap','ui.router','ngAnimate']);

angular.module('pasient').config(function($stateProvider) {

    $stateProvider.state('home.pasients', {
        url: '/pasients',
        templateUrl: 'pasient/partial/list/list.html'
    });
    $stateProvider.state('home.newPasient', {
        url: '/new-pasient',
        templateUrl: 'pasient/partial/newPasient/newPasient.html'
    });
    $stateProvider.state('home.patientPrescription', {
        url: '/patient-prescription',
        templateUrl: 'pasient/partial/patientPrescription/patientPrescription.html'
    });
    /* Add New States Above */

});

