(function () {
    'use strict';

    // Usage:
    // Daily Dropped Voice Calls view.

    window.app
        .component('failedCallsGroupedByCause', {
            template: require('./failed-calls-grouped-by-cause.html'),
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
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/08245d80-e02a-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:'causeForTermination+%3E+0'),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(field:causeForTermination.keyword,missingBucket:!f,missingBucketLabel:Missing,order:desc,orderBy:_key,otherBucket:!f,otherBucketLabel:Other,size:500),schema:segment,type:terms)),params:(addLegend:!t,addTooltip:!t,dimensions:(buckets:!((accessor:0,aggType:terms,format:(id:terms,params:(id:string,missingBucketLabel:Missing,otherBucketLabel:Other)),params:())),metric:(accessor:1,aggType:sum,format:(id:number),params:())),isDonut:!t,labels:(last_level:!t,show:!f,truncate:100,values:!t),legendPosition:bottom,type:pie),title:'Failed+Calls+grouped+by+Cause',type:pie))`);
        };
    }
})();