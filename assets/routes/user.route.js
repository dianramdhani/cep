(function () {
    'use strict';

    window.app
        .config(RouteUser);

    RouteUser.$inject = ['$stateProvider'];

    function RouteUser($stateProvider) {
        [
            { name: 'user.dailyDroppedVoiceCalls', url: '/daily-dropped-voice-calls', component: 'dailyDroppedVoiceCalls' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();