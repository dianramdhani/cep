(function () {
    'use strict';

    // Usage:
    // Daily Voice Call Attempts view.

    window.app
        .component('dailyVoiceCallAttempts', {
            template: require('./daily-voice-call-attempts.html'),
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
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/ba0ea800-d929-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(drop_partials:!f,extended_bounds:(),field:date,interval:auto,min_doc_count:1,useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:!n,y:!((accessor:0,aggType:count,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Sum+of+calls'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:line,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Sum+of+calls'),type:value))),title:'Daily+Voice+Call+Attempts',type:line))`);
        };

        $scope.setWeek = (dateFrom, dateTo) => {
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/7e40c700-e364-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:Calls,field:calls),schema:metric,type:sum),(enabled:!t,id:'2',params:(customLabel:Day,field:dateFormatted,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderAgg:(enabled:!t,id:'2-orderAgg',params:(field:date),schema:orderAgg,type:max),orderBy:custom,otherBucket:!f,otherBucketLabel:Other,size:7),schema:segment,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:terms,format:(id:terms,params:(id:date,missingBucketLabel:Missing,otherBucketLabel:Other,pattern:dddd)),params:()),y:!((accessor:1,aggType:sum,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:Calls),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:line,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:Calls),type:value))),title:'Daily+Voice+Call+Attempts+Week',type:line))`);
        };
    }
})();