(function () {
    'use strict';

    window.app
        .directive('trDatepickerMonth', trDatepickerMonth);

    trDatepickerMonth.$inject = [];
    function trDatepickerMonth() {
        // Usage:
        // Change month to fromDate and toDate.
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
                    scope.dateFromfrom = moment(element.val()).startOf('month').toDate();
                    scope.dateTo = moment(element.val()).endOf('month').toDate()
                });
            });
        }
    }
})();