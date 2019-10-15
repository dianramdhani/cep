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
            if (!Modernizr.inputtypes.month) {
                element.monthpicker({ dateFormat: 'yy-mm' });
            }
            element.on('change', () => {
                scope.$apply(() => {
                    scope.dateFrom = moment(element.val()).startOf('month').add(12, 'hours').toDate();
                    scope.dateTo = moment(element.val()).endOf('month').add(12, 'hours').toDate()
                });
            });
        }
    }
})();