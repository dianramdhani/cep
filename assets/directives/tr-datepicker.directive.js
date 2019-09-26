(function () {
    'use strict';

    window.app
        .directive('trDatepicker', trDatepicker);

    trDatepicker.$inject = [];
    function trDatepicker() {
        // Usage:
        // Set ng-model with datepicker jquery UI.
        // Creates:
        // Require jquery UI.
        var directive = {
            link: link,
            restrict: 'A',
        };
        return directive;

        function link(scope, element, attrs) {
            element.datepicker({ dateFormat: 'dd-mm-yy' });
        }
    }
})();