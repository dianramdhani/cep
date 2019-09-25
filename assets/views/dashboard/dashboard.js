(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['DashboardService', 'SummaryRestService'];
    function _(DashboardService, SummaryRestService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            // DashboardService.counters()
            //     .then(res => {
            //         console.log('counters', res);
            //     });
            // DashboardService.sumProcessedCalls()
            //     .then(res => {
            //         console.log('sumProcessedCalls', res);
            //     });
            SummaryRestService.count({ date: null })
                .then(res => {
                    console.log(res);
                });
        };
    }
})();