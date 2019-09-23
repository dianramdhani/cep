(function () {
    'use strict';

    // Usage:
    // User container.

    window.app
        .component('userContainer', {
            template: require('./user-container.html'),
            controller: ControllerController
        });

    ControllerController.$inject = ['$scope'];
    function ControllerController($scope) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.menu = {
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
                        label: 'Daily Dropped Voice Calls',
                        icon: 'monitor',
                        state: {
                            to: '',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Daily MSISDN Voice Call Attempts',
                        icon: 'monitor',
                        state: {
                            to: '',
                            params: {}
                        },
                        active: false
                    },
                    {
                        type: 'link',
                        label: 'Daily Voice Call Attempts',
                        icon: 'monitor',
                        state: {
                            to: '',
                            params: {}
                        },
                        active: false
                    }
                ]
            }
        };
    }
})();