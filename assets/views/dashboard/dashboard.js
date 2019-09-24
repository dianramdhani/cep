(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['DashboardService'];
    function _(DashboardService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            DashboardService.counters()
                .then(res => {
                    console.log('counters', res);
                });
            DashboardService.sumProcessedCalls()
                .then(res => {
                    console.log('sumProcessedCalls', res);
                });

        };
    }
})();