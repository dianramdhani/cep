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
            if (!Modernizr.inputtypes.week) {
                let selectDate = null,
                    weekStr = null;

                element.weekpicker({
                    dateFormat: 'mm-dd-yy',
                    firstDay: 1,
                    beforeShow: () => {
                        if (selectDate !== null) {
                            element.val(selectDate.format('MM-DD-YYYY'));
                        }
                        $('#ui-datepicker-div').addClass('tr-datepicker-week');
                    },
                    onClose: () => {
                        if (weekStr !== null) {
                            element.val(weekStr);
                        }
                        $('#ui-datepicker-div').removeClass('tr-datepicker-week');
                    },
                    onSelect: () => {
                        scope.$apply(() => {
                            selectDate = moment(element.val(), 'MM-DD-YYYY');
                            weekStr = `${selectDate.year()}-W${selectDate.isoWeek()}`;
                            scope.dateFrom = moment(weekStr).startOf('week').add(12, 'hours').toDate();
                            scope.dateTo = moment(weekStr).endOf('week').add(12, 'hours').toDate();
                        });
                    },
                });
            } else {
                element.on('change', () => {
                    scope.$apply(() => {
                        scope.dateFrom = moment(element.val()).startOf('week').add(12, 'hours').toDate();
                        scope.dateTo = moment(element.val()).endOf('week').add(12, 'hours').toDate();
                    });
                });
            }
        }
    }
})();