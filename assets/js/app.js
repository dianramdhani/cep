window.app = angular.module('CEP', ['ui.router', 'ngCookies', 'datatables']);

// RUN
(function () {
    'use strict';

    window.app
        .run(Run);

    Run.$inject = ['$state', '$rootScope', '$http', 'UtilService'];
    function Run($state, $rootScope, $http, UtilService) {
        UtilService.updateGlobal();
        if (typeof $rootScope.global.user === 'undefined') {
            $state.go('login');
        } else {
            // $http.defaults.headers.common = { token: $rootScope.global.user.token };
            $state.go('user.dashboard');
        }
    }
})();

// ROUTES
require('../routes/app.route');
require('../routes/user.route');

// SERVICES
require('../services/util.service');
require('../services/dashboard.service');
require('../services/summary-rest.service');
require('../services/user.service');

// DIRECTIVES
require('../directives/tr-datepicker-week.directive');
require('../directives/tr-datepicker-month.directive');

// COMPONENTS
require('../components/tr-wrapper/tr-wrapper');

// VIEWS
require('../views/login/login');
require('../views/user-container/user-container');
require('../views/daily-dropped-voice-calls/daily-dropped-voice-calls');
require('../views/daily-msisdn-voice-attempts/daily-msisdn-voice-attempts');
require('../views/daily-voice-call-attempts/daily-voice-call-attempts');
require('../views/dashboard/dashboard');
require('../views/failed-calls-grouped-by-cause/failed-calls-grouped-by-cause');
require('../views/daily-data-connections-attempts/daily-data-connections-attempts');
require('../views/daily-dropped-data-connection/daily-dropped-data-connection');
require('../views/daily-msisdn-data-connection-attempts/daily-msisdn-data-connection-attempts');
require('../views/failed-data-connection-attempts-grouped-by-cause/failed-data-connection-attempts-grouped-by-cause');