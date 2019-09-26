(function () {
    'use strict';

    // Usage:
    // Dashboard view.

    window.app
        .component('dashboard', {
            template: require('./dashboard.html'),
            controller: _
        });

    _.$inject = ['$scope', 'DashboardService', 'SummaryRestService'];
    function _($scope, DashboardService, SummaryRestService) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            SummaryRestService.count({ date: null })
                .then(({ data }) => {
                    $scope.data = data;
                });
        };
    }
})();