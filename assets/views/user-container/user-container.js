(function () {
    'use strict';

    // Usage:
    // User container.

    window.app
        .component('userContainer', {
            template: require('./user-container.html'),
            controller: ControllerController
        });

    ControllerController.$inject = ['$scope', '$rootScope'];
    function ControllerController($scope, $rootScope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.menu = $rootScope.global.menu || {
                sidebar: [
                    // {
                    //     type: 'title | link | has-sub-link',
                    //     label: '',
                    //     icon: '',
                    //     state: {
                    //         to: '',
                    //         params: {}
                    //     },
                    //     active: true
                    // },
                    {
                        type: 'link',
                        label: 'Dashboard',
                        icon: 'monitor',
                        state: {
                            to: 'user.dashboard',
                            params: {}
                        },
                        active: true
                    },
                    {
                        type: 'link',
                        label: 'Daily Dropped Voice Calls',
                        icon: 'trending-up',
                        state: {
                            to: 'user.dailyDroppedVoiceCalls',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Daily MSISDN Voice Call Attempts',
                        icon: 'trending-up',
                        state: {
                            to: 'user.dailyMsisdnVoiceAttempts',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Daily Voice Call Attempts',
                        icon: 'trending-up',
                        state: {
                            to: 'user.dailyVoiceCallAttempts',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Failed Calls Grouped by Cause',
                        icon: 'pie-chart',
                        state: {
                            to: 'user.failedCallsGroupedByCause',
                            params: {}
                        },
                        active: false
                    }
                ]
            }
        };
    }
})();