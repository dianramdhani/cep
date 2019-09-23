window.app = angular.module('CEP', ['ui.router', 'ngCookies', 'datatables']);

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state', '$rootScope', '$cookies', '$http'];
    function Run($state, $rootScope, $cookies, $http) {
        $state.go('login');

        // $rootScope['global'] = {
        //     user: angular.fromJson($cookies.get('user')),
        //     menu: angular.fromJson($cookies.get('menu'))
        // } || {};
        // if (typeof $rootScope.global.user === 'undefined') {
        //     $state.go('login');
        // } else {
        //     // $http.defaults.headers.common = { token: $rootScope.global.user.token };
        //     $state.go('etl');
        // }
    }
})();

// ROUTES
require('../routes/app.route');
require('../routes/user.route');

// SERVICES

// DIRECTIVES

// COMPONENTS
require('../components/tr-wrapper/tr-wrapper');

// VIEWS
require('../views/login/login');
require('../views/user-container/user-container');
require('../views/daily-dropped-voice-calls/daily-dropped-voice-calls');
require('../views/daily-msisdn-voice-attempts/daily-msisdn-voice-attempts');
require('../views/daily-voice-call-attempts/daily-voice-call-attempts');