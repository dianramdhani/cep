(function () {
    'use strict';

    window.app
        .service('DashboardService', DashboardService);

    DashboardService.$inject = ['$http'];
    function DashboardService($http) {
        this.counters = counters;
        this.sumProcessedCalls = sumProcessedCalls;
        this.sumProcessedRecords = sumProcessedRecords;

        function counters() {
            return $http.get('http://mars.tritronik.com:9090/nifi-api/counters');
        }

        function sumProcessedCalls() {
            return $http.post('http://elastic.tritronik.com:9200/calls/_search?size=0', {
                aggs: {
                    calls: {
                        sum: { field: "calls" }
                    }
                }
            });
        }

        function sumProcessedRecords() {
            return $http.post(' http://elastic.tritronik.com:9200/record-summary/_search?size=0', {
                aggs: {
                    calls: {
                        sum: { field: "records" }
                    }
                }
            });
        }
    }
})();