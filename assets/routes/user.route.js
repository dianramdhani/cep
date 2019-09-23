(function () {
    'use strict';

    window.app
        .config(RouteUser);

    RouteUser.$inject = ['$stateProvider'];

    function RouteUser($stateProvider) {
        [
            { name: 'user.dailyDroppedVoiceCalls', url: '/daily-dropped-voice-calls', component: 'dailyDroppedVoiceCalls' },
            { name: 'user.dailyMsisdnVoiceAttempts', url: '/daily-msisdn-voice-attempts', component: 'dailyMsisdnVoiceAttempts' },
            { name: 'user.dailyVoiceCallAttempts', url: '/daily-voice-call-attempts', component: 'dailyVoiceCallAttempts' },
        ]
            .forEach(state => $stateProvider.state(state));
    }
})();