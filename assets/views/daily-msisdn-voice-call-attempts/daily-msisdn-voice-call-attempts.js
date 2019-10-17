(function () {
    'use strict';

    // Usage:
    // Daily MSISDN Voice Call Attempts view.

    window.app
        .component('dailyMsisdnVoiceCallAttempts', {
            template: require('./daily-msisdn-voice-call-attempts.html'),
            controller: _,
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
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/143e9e60-d92b-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Unique+MSISDN',field:aPartyNumber.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Date,drop_partials:!f,extended_bounds:(),field:date,interval:d,min_doc_count:1,timeRange:(from:now-3M,to:now),useNormalizedEsInterval:!t),schema:segment,type:date_histogram)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:date_histogram,format:(id:date,params:(pattern:YYYY-MM-DD)),params:(bounds:(max:'2019-10-17T04:16:58.781Z',min:'2019-07-17T04:16:58.781Z'),date:!t,format:YYYY-MM-DD,interval:P1D)),y:!((accessor:1,aggType:cardinality,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Unique+MSISDN'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:histogram,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Unique+MSISDN'),type:value))),title:'Daily+MSISDN+voice+call+attempts',type:line))`);
        };

        $scope.setWeek = (dateFrom, dateTo) => {
            $scope.link = $sce.trustAsResourceUrl(`http://elastic.tritronik.com:5601/app/kibana#/visualize/edit/d4262d50-e363-11e9-ba24-c1301fb6b218?embed=true&_g=(refreshInterval:(pause:!t,value:0),time:(from:'${dateFrom.toISOString()}',to:'${dateTo.toISOString()}'))&_a=(filters:!(),linked:!f,query:(language:kuery,query:''),uiState:(),vis:(aggs:!((enabled:!t,id:'1',params:(customLabel:'Unique+MSISDN',field:aPartyNumber.keyword),schema:metric,type:cardinality),(enabled:!t,id:'2',params:(customLabel:Day,field:dateFormatted,missingBucket:!f,missingBucketLabel:Missing,order:asc,orderAgg:(enabled:!t,id:'2-orderAgg',params:(field:date),schema:orderAgg,type:max),orderBy:custom,otherBucket:!f,otherBucketLabel:Other,size:7),schema:segment,type:terms)),params:(addLegend:!t,addTimeMarker:!f,addTooltip:!t,categoryAxes:!((id:CategoryAxis-1,labels:(filter:!t,show:!t,truncate:100),position:bottom,scale:(type:linear),show:!t,style:(),title:(),type:category)),dimensions:(x:(accessor:0,aggType:terms,format:(id:terms,params:(id:date,missingBucketLabel:Missing,otherBucketLabel:Other,pattern:dddd)),params:()),y:!((accessor:1,aggType:cardinality,format:(id:number),params:()))),grid:(categoryLines:!f),legendPosition:right,seriesParams:!((data:(id:'1',label:'Unique+MSISDN'),drawLinesBetweenPoints:!t,mode:normal,show:true,showCircles:!t,type:line,valueAxis:ValueAxis-1)),times:!(),type:line,valueAxes:!((id:ValueAxis-1,labels:(filter:!f,rotate:0,show:!t,truncate:100),name:LeftAxis-1,position:left,scale:(mode:normal,type:linear),show:!t,style:(),title:(text:'Unique+MSISDN'),type:value))),title:'Daily+MSISDN+voice+call+attempts+week',type:line))`);
        };
    }
})();