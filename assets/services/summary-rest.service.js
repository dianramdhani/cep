(function () {
    'use strict';

    window.app
        .service('SummaryRestService', SummaryRestService);

    SummaryRestService.$inject = ['$http', 'CONFIG'];
    function SummaryRestService($http, CONFIG) {
        this.count = count;

        const url = CONFIG.API;

        /**
         * Collect all count data.
         * @param {String} param0 - Date of count.
         */
        function count({ date }) {
            return $http.get(`${url}/summary/count`, { params: { date } });
        }
    }
})();