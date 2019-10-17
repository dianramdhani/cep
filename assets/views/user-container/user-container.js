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
                        icon: 'bar-chart-2',
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
                            to: 'user.dailyMsisdnVoiceCallAttempts',
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
                    },
                    {
                        type: 'link',
                        label: 'Daily Data Connections Attempts',
                        icon: 'bar-chart-2',
                        state: {
                            to: 'user.dailyDataConnectionsAttempts',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Daily Dropped Data Connection',
                        icon: 'trending-up',
                        state: {
                            to: 'user.dailyDroppedDataConnection',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Daily MSISDN Data Connection Attempts',
                        icon: 'bar-chart-2',
                        state: {
                            to: 'user.dailyMsisdnDataConnectionAttempts',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Failed Data Connection Attempts Grouped by Cause',
                        icon: 'pie-chart',
                        state: {
                            to: 'user.failedDataConnectionAttemptsGroupedByCause',
                            params: {}
                        },
                        active: false
                    }
                ]
            }
        };
    }
})();