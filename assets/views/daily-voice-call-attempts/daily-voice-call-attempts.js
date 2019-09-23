(function () {
    'use strict';

    // Usage:
    // Daily Voice Call Attempts view.

    window.app
        .component('dailyVoiceCallAttempts', {
            template: require('./daily-voice-call-attempts.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();