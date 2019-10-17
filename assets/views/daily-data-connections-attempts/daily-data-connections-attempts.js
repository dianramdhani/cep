(function () {
    'use strict';

    // Usage:
    // Daily Data Connections Attempts view.

    window.app
        .component('dailyDataConnectionsAttempts', {
            template: require('./daily-data-connections-attempts.html'),
            controller: _
        });

    _.$inject = ['$scope', '$sce'];
    function _($scope, $sce) {
        let $ctrl = this;
        $ctrl.$onInit = () => {
            $scope.timeStamp = 'daily';
            $scope.dateFrom = new Date(2019, 6, 31);
            $scope.dateTo = new Date();
            $scope.setDate($scope.dateFrom, $scope.dateTo);
        };

        $scope.setDate = (dateFrom, dateTo) => {
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/ecb2c0b0-e438-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:Calls,field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(customLabel:Date,drop_partials:!f,extended_bounds:(),field:date,interval:d,min_doc_count:1,timeRange:(from:now-3M,to:now),useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:date_histogram,format:(id:date,params:(pattern:YYYY-MM-DD)),params:(bounds:(max:'2019-10-17T04:14:50.831Z',min:'2019-07-17T04:14:50.831Z'),date:!t,format:YYYY-MM-DD,interval:P1D)),y:!((accessor:1,aggType:sum,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:Calls),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Calls),type:value))),title:'Daily+Data+Connections+Attempts',type:line))`);
        };

        $scope.setWeek = (dateFrom, dateTo) => {
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/4c66c370-e43a-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Connection+Attempts',field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(field:date,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderAgg:(enabled:!t,id:'2-orderAgg',params:(field:date),schema:orderAgg,type:max),orderBy:custom,otherBucket:!f,otherBucketLabel:Other,size:5),schema:segment,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:!n,y:!((accessor:0,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Connection+Attempts'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:line,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Connection+Attempts'),type:value))),title:'Daily+Data+Connection+Attempts+Week',type:line))`);
        };
    }
})();