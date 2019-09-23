(function () {
    'use strict';

    // Usage:
    // Daily Dropped Voice Calls view.

    window.app
        .component('dailyDroppedVoiceCalls', {
            template: require('./daily-dropped-voice-calls.html'),
            controller: _
        });

    _.$inject = ['$scope'];
    function _($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };
    }
})();