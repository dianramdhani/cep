(function () {
    'use strict';

    window.app
        .config(RouteUser);

    RouteUser.$inject = ['$stateProvider'];

    function RouteUser($stateProvider) {
        [
            { name: 'user.dashboard', url: '/dashboard', component: 'dashboard' },
            { name: 'user.dailyDroppedVoiceCalls', url: '/daily-dropped-voice-calls', component: 'dailyDroppedVoiceCalls' },
            { name: 'user.dailyMsisdnVoiceAttempts', url: '/daily-msisdn-voice-attempts', component: 'dailyMsisdnVoiceAttempts' },
            { name: 'user.dailyVoiceCallAttempts', url: '/daily-voice-call-attempts', component: 'dailyVoiceCallAttempts' },
            { name: 'user.failedCallsGroupedByCause', url: '/failed-calls-grouped-by-cause', component: 'failedCallsGroupedByCause' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();