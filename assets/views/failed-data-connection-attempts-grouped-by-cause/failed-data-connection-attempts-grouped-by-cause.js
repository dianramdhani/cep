(function () {
    'use strict';

    // Usage:
    // Failed Data Connection Attempts Grouped by Cause view.

    window.app
        .component('failedDataConnectionAttemptsGroupedByCause', {
            template: require('./failed-data-connection-attempts-grouped-by-cause.html'),
            controller: _
        });

    _.$inject = ['$scope', '$sce'];
    function _($scope, $sce) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.dateFrom = new Date(2019, 6, 31);
            $scope.dateTo = new Date();
            $scope.setDate($scope.dateFrom, $scope.dateTo);
        };

        $scope.setDate = (dateFrom, dateTo) => {
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/1b976c70-e43c-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:'causeForTermination+%3E+0'),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(field:causeForTermination.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:500),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,dimensions:(metric:(accessor:0,aggType:count,format:(id:number),params:())),isDonut:!t,labels:(last_level:!t,show:!f,truncate:100,values:!t),legendPosition:right,type:pie),title:'Failed+Data+Connection+Attempts+grouped+by+Cause',type:pie))`);
        };
    }
})();