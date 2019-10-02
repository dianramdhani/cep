(function () {
    'use strict';

    window.app
        .directive('trDatepickerWeek', trDatepickerWeek);

    trDatepickerWeek.$inject = [];
    function trDatepickerWeek() {
        // Usage:
        // Change week to fromDate and toDate.
        // Creates:
        // Call by graph.
        var directive = {
            link: link,
            restrict: 'A',
            scope: {
                dateFrom: '=',
                dateTo: '='
            }
        };
        return directive;

        function link(scope, element, attrs) {
            element.on('change', () => {
                scope.$apply(() => {
                    scope.dateFrom = moment(element.val()).startOf('week').add(12, 'hours').toDate();
                    scope.dateTo = moment(element.val()).endOf('week').add(12, 'hours').toDate()
                });
            });
        }
    }
})();