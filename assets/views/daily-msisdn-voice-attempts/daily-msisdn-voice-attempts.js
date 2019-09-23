(function () {
    'use strict';

    // Usage:
    // Daily MSISDN Voice Call Attempts view.

    window.app
        .component('dailyMsisdnVoiceAttempts', {
            template: require('./daily-msisdn-voice-attempts.html'),
            controller: _,
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();